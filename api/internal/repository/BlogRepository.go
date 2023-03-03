package repository

import (
	"context"
	"fmt"
	"github.com/movies/internal/config"
	"github.com/movies/internal/utils/logger"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"time"
)

type Blog struct {
	ID        string    `bson:"id" validate:"required,id"`
	CreatedAt time.Time `bson:"createdAt" validate:"required,createdAt"`
	UpdatedAt time.Time `bson:"updatedAt"`
	ImagePath string    `bson:"imagePath" validate:"imagePath"`
	Category  string    `bson:"category" validate:"required,category"`
	Type      string    `bson:"type" validate:"required,type"`
	Title     string    `bson:"title" validate:"required,title"`
	Body      string    `bson:"string,omitempty"`
	Version   string    `bson:"version"`
}

type BlogRepository struct {
	client     *mongo.Client
	collection *mongo.Collection
}

func NewBlogRepository(client *mongo.Client, cfg *config.Config) *BlogRepository {
	return &BlogRepository{
		client: client,
		collection: client.Database(cfg.BlogConfig.Database).
			Collection(cfg.BlogConfig.Collection),
	}
}

func (m *BlogRepository) Insert(ctx context.Context, blog *Blog) error {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Inserting new blog")

	//TODO: add validation

	//TODO: add new fields
	doc := bson.D{
		{"id", blog.ID},
		{"createdAt", blog.CreatedAt},
		{"title", blog.Title},
		{"body", blog.Body},
		{"imagePath", blog.ImagePath},
		{"version", blog.Version},
	}

	res, err := m.collection.InsertOne(ctx, doc)
	if err != nil {
		return err
	}

	fmt.Printf("Inserted document with _id: %v\n", res.InsertedID)

	return nil
}

func (m *BlogRepository) Get(ctx context.Context, id int64) (*Blog, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Getting blog")

	filter := bson.D{{"id", id}}

	result := &Blog{}

	err := m.collection.FindOne(ctx, filter).Decode(result)
	if err != nil {
		return result, err
	}

	clog.Info("blog found")

	return result, nil
}

func (m *BlogRepository) Update(ctx context.Context, blog *Blog) (int64, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Updating blog")

	find := bson.D{
		{"id", blog.ID},
	}

	update := bson.D{
		{"$set", bson.D{
			{"id", blog.ID},
			{"updatedAt", blog.UpdatedAt},
			{"title", blog.Title},
			{"body", blog.Body},
			{"imagePath", blog.ImagePath},
			{"version", blog.Version},
		},
		},
	}

	count, err := m.collection.UpdateMany(ctx, find, update)
	if err != nil {
		clog.Error(err)
		return 0, err
	}

	clog.Info("Updating blog completed")

	return count.ModifiedCount, err
}

func (m *BlogRepository) Delete(ctx context.Context, id int64) (int64, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Deleting blog")

	filter := bson.D{
		{"id", id},
	}

	num, err := m.collection.DeleteMany(ctx, filter)
	if err != nil {
		return 0, err
	}

	return num.DeletedCount, err
}

// add pagenation here
func (m *BlogRepository) GetAll(ctx context.Context) ([]*Blog, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Repo - GetAll")

	filter := bson.D{}

	cur, err := m.collection.Find(ctx, filter)
	if err != nil {
		return nil, err
	}

	var blogs []*Blog

	err = cur.All(ctx, &blogs)
	if err != nil {
		return nil, err
	}

	return blogs, nil
}
