package service

import (
	"context"
	"github.com/golang/protobuf/ptypes/timestamp"
	"github.com/movies/internal/repository"
	"github.com/movies/internal/utils/logger"
	"github.com/movies/proto/api"
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
		// handle error here
	}

	var blogs []*api.Blog

	for _, blog := range allBlogs {
		temp := api.Blog{
			Id:        blog.ID,
			CreatedAt: &blog.CreatedAt,
			ImagePath: blog.ImagePath,
			Title:     blog.Title,
			Body:      blog.Body,
		}
		blogs = append(blogs, &temp)
	}

	return &api.GetAllBlogsResponse{
		Blog: blogs,
	}, nil
}

func (s *BlogServiceServer) CreateBlog(ctx context.Context, blog *api.CreateBlogRequest) (*api.CreateBlogResponse, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Received request...")

	temp := repository.Blog{
		ID:        blog.Blog.Id,
		CreatedAt: timestamp.Timestamp{},
		UpdatedAt: timestamp.Timestamp{},
		ImagePath: blog.Blog.ImagePath,
		Title:     blog.Blog.Title,
		Body:      blog.Blog.Body,
		Version:   0,
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
