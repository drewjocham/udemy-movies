package repository

import (
	"context"
	"fmt"
	"github.com/movies/internal/utils/logger"
	"github.com/movies/internal/utils/runtime"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"time"
)

type Movie struct {
	ID        int64           `json:"id"`
	CreatedAt time.Time       `json:"-"`
	UpdatedAt time.Time       `json:"-"`
	Title     string          `json:"title"`
	Year      int32           `json:"year,omitempty"`
	Runtime   runtime.Runtime `json:"runtime,omitempty"`
	Genres    []string        `json:"genres,omitempty"`
	Version   int32           `json:"version"`
}

type MovieRepository struct {
	client     *mongo.Client
	collection *mongo.Collection
}

func (m *MovieRepository) Insert(ctx context.Context, movie *Movie) (string, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Inserting new movie")

	doc := bson.D{
		{"id", movie.ID},
		{"createdAt", movie.CreatedAt},
		{"title", movie.Title},
		{"year", movie.Year},
		{"runtime", movie.Runtime},
		{"genres", movie.Genres},
		{"version", movie.Version},
	}

	res, err := m.collection.InsertOne(ctx, doc)
	if err != nil {
		return "", err
	}

	fmt.Printf("Inserted document with _id: %v\n", res.InsertedID)
	result := res.InsertedID.(primitive.ObjectID).String()

	return result, nil
}

func (m *MovieRepository) Get(ctx context.Context, id int64) (*Movie, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Getting Movie")

	filter := bson.D{{"id", id}}

	result := &Movie{}

	err := m.collection.FindOne(ctx, filter).Decode(result)
	if err != nil {
		return result, err
	}

	clog.Info("Movie found")

	return result, nil
}

func (m *MovieRepository) Update(ctx context.Context, movie *Movie) (int64, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Updating Todo")

	find := bson.D{
		{"id", movie.ID},
	}

	update := bson.D{
		{"$set", bson.D{
			{"updatedAt", time.Now()},
			{"title", movie.Title},
			{"year", movie.Year},
			{"runtime", movie.Runtime},
			{"genres", movie.Genres},
			{"version", movie.Version},
		},
		},
	}

	count, err := m.collection.UpdateMany(ctx, find, update)
	if err != nil {
		clog.Error(err)
		return 0, err
	}

	clog.Info("Updating Todo completed")

	return count.ModifiedCount, err
}

func (m *MovieRepository) Delete(ctx context.Context, id int64) (int64, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Deleting movie")

	filter := bson.D{
		{"id", id},
	}

	num, err := m.collection.DeleteMany(ctx, filter)
	if err != nil {
		return 0, err
	}

	return num.DeletedCount, err
}

func (m *MovieRepository) GetAll(ctx context.Context) ([]*Movie, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Repo - GetAll")

	filter := bson.D{}

	cur, err := m.collection.Find(ctx, filter)
	if err != nil {
		return nil, err
	}

	var movies []*Movie

	err = cur.All(ctx, &movies)
	if err != nil {
		return nil, err
	}

	return movies, nil
}
