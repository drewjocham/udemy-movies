package repository

import (
	"errors"
	"go.mongodb.org/mongo-driver/mongo"
	"time"

	"golang.org/x/crypto/bcrypt"
)

var (
	ErrDuplicateEmail = errors.New("duplicate email")
)

var AnonymousUser = &User{}

type User struct {
	ID        int64     `json:"id"`
	CreatedAt time.Time `json:"created_at"`
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	Password  password  `json:"-"`
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

func NewUserRepository(client *mongo.Client) *Repository {
	return &Repository{
		client:     client,
		collection: client.Database("movies").Collection("users"),
	}
}

func (r Repository) Insert(user *User) error {
	return nil
}

func (r Repository) GetByEmail(email string) (*User, error) {
	return nil, nil
}

func (r Repository) Update(user *User) error {
	return nil
}

func (r Repository) GetForToken(tokenScope, tokenPlaintext string) (*User, error) {

	return nil, nil
}
