package service

import (
	"context"
	"github.com/movies/internal/repository"
	"github.com/movies/internal/utils/logger"
	"github.com/movies/proto/api"
	"google.golang.org/protobuf/types/known/timestamppb"
	"strconv"
	"time"
)

type BlogServiceServer struct {
	repo BlogRepository
	api.UnimplementedBlogServiceServer
}

func NewBlogServiceServer(repo BlogRepository) api.BlogServiceServer {
	return &BlogServiceServer{
		repo: repo,
	}
}

type BlogRepository interface {
	GetAll(ctx context.Context) ([]*repository.Blog, error)
	Get(ctx context.Context, id int64) (*repository.Blog, error)
	Update(ctx context.Context, blog *repository.Blog) (int64, error)
	Delete(ctx context.Context, id int64) (int64, error)
	Insert(ctx context.Context, blog *repository.Blog) error
}

// here we need pagination
func (s *BlogServiceServer) GetAllBlogs(ctx context.Context, req *api.BlogRequest) (*api.GetAllBlogsResponse, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Received request...")

	allBlogs, err := s.repo.GetAll(ctx)
	if err != nil {
		clog.Error(err)
	}
	var index = 0
	blogs := make(map[string]*api.Blog)

	for _, blog := range allBlogs {

		createdAt, err := time.Parse("2006-01-02 15:04:05 -0700 MST", blog.CreatedAt.String())
		if err != nil {
			return nil, err
		}

		updatedAt, err := time.Parse("2006-01-02 15:04:05 -0700 MST", blog.UpdatedAt.String())
		if err != nil {
			return nil, err
		}

		tempBlog := &api.Blog{
			Id:        blog.ID,
			CreatedAt: timestamppb.New(createdAt),
			UpdatedAt: timestamppb.New(updatedAt),
			ImagePath: blog.ImagePath,
			Title:     blog.Title,
			Type:      blog.Type,
			Body:      blog.Body,
			Version:   blog.Version,
		}
		index = index + 1
		blogs[strconv.FormatInt(int64(index), 10)] = tempBlog
	}

	return &api.GetAllBlogsResponse{
		Blogs: blogs,
	}, nil
}

func (s *BlogServiceServer) CreateBlog(ctx context.Context, b *api.CreateBlogRequest) (*api.CreateBlogResponse, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Received request...")

	temp := repository.Blog{
		ID:        b.Blog.Id,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
		ImagePath: b.Blog.ImagePath,
		Title:     b.Blog.Title,
		Body:      b.Blog.Body,
		Version:   b.Blog.Version,
	}

	err := s.repo.Insert(ctx, &temp)
	if err != nil {
		return nil, err
	}

	return &api.CreateBlogResponse{}, nil
}

func (s *BlogServiceServer) GetBlog(context context.Context, req *api.BlogRequest) (*api.BlogResponse, error) {
	clog := logger.GetLoggerFromContext(context)

	clog.Info("Received request...")

	return &api.BlogResponse{}, nil
}

func (s *BlogServiceServer) UpdateBlog(context context.Context, req *api.BlogRequest) (*api.BlogResponse, error) {
	clog := logger.GetLoggerFromContext(context)

	clog.Info("Received request...")

	return &api.BlogResponse{}, nil
}

func (s *BlogServiceServer) DeleteBlog(context context.Context, req *api.BlogRequest) (*api.BlogResponse, error) {
	clog := logger.GetLoggerFromContext(context)

	clog.Info("Received request...")

	return &api.BlogResponse{}, nil
}
