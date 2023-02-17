package repository

import (
	"context"
	"errors"
	"fmt"
	"github.com/movies/internal/config"
	"github.com/movies/internal/utils/logger"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"golang.org/x/crypto/bcrypt"
	"gopkg.in/validator.v2"
	"time"
)

var (
	ErrDuplicateEmail = errors.New("duplicate email")
	ErrInvalidUser    = errors.New("invalid user model")
)

var AnonymousUser = &User{}

type User struct {
	ID        int64     `json:"id" validate:"required,id"`
	CreatedAt time.Time `json:"created_at" validate:"required,created_at"`
	Name      string    `json:"name" validate:"required,name"`
	Email     string    `json:"email" validate:"required,email"`
	Password  password  `json:"-" validate:"required,password"`
	Activated bool      `json:"activated"`
	Version   int       `json:"-"`
}

type password struct {
	plaintext *string
	hash      []byte
}

func (p *password) Set(plaintextPassword string) error {
	hash, err := bcrypt.GenerateFromPassword([]byte(plaintextPassword), 12)
	if err != nil {
		return err
	}

	p.plaintext = &plaintextPassword
	p.hash = hash

	return nil
}

func (p *password) Matches(plaintextPassword string) (bool, error) {
	err := bcrypt.CompareHashAndPassword(p.hash, []byte(plaintextPassword))
	if err != nil {
		switch {
		case errors.Is(err, bcrypt.ErrMismatchedHashAndPassword):
			return false, nil
		default:
			return false, err
		}
	}

	return true, nil
}

type Repository struct {
	client     *mongo.Client
	collection *mongo.Collection
}

func NewUserRepository(client *mongo.Client, cfg *config.Config) *Repository {
	return &Repository{
		client:     client,
		collection: client.Database(cfg.UserConfig.Database).Collection(cfg.UserConfig.Collection),
	}
}

func (r Repository) Insert(ctx context.Context, user *User) (string, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Inserting new user")

	if errs := validator.Validate(user); errs != nil {
		clog.Error(ErrInvalidUser)
	}

	doc := bson.D{
		{"id", user.ID},
		{"createdAt", user.CreatedAt},
		{"name", user.Name},
		{"email", user.Email},
		{"password", user.Password},
		{"activated", false},
		{"version", user.Version},
	}

	res, err := r.collection.InsertOne(ctx, doc)
	if err != nil {
		return "", err
	}

	fmt.Printf("Inserted user document with _id: %v\n", res.InsertedID)
	result := res.InsertedID.(primitive.ObjectID).String()

	return result, nil
}

func (r Repository) GetByEmail(ctx context.Context, email string) (*User, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Getting email")

	filter := bson.D{{"email", email}}

	result := &User{}

	err := r.collection.FindOne(ctx, filter).Decode(result)
	if err != nil {
		return result, err
	}

	clog.Info("email found")

	return result, nil
}

func (r Repository) Update(ctx context.Context, user *User) (int64, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Updating user")

	if errs := validator.Validate(user); errs != nil {
		clog.Error(ErrInvalidUser)
	}

	find := bson.D{
		{"id", user.ID},
	}

	update := bson.D{
		{"$set", bson.D{
			{"createdAt", user.CreatedAt},
			{"name", user.Name},
			{"email", user.Email},
			{"password", user.Password},
			{"activated", false},
			{"version", user.Version},
			{"updated", time.Now()},
		},
		},
	}

	count, err := r.collection.UpdateMany(ctx, find, update)
	if err != nil {
		clog.Error(err)
		return 0, err
	}

	clog.Info("Updating Todo completed")

	return count.ModifiedCount, err

}

func (r Repository) GetForToken(tokenScope, tokenPlaintext string) (*User, error) {

	return nil, nil
}
