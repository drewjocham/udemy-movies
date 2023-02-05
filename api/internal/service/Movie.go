package service

import (
	"context"
	"github.com/movies/internal/utils/logger"
	"github.com/movies/proto/api"
)

type movieServiceServer struct {
	api.UnimplementedMovieServiceServer
}

func NewMovieServiceServer() api.MovieServiceServer {
	return &movieServiceServer{}
}

func (s *movieServiceServer) GetAllMovies(context context.Context, req *api.MovieRequest) (*api.GetAllMoviesResponse, error) {
	clog := logger.GetLoggerFromContext(context)

	clog.Info("Received request...")

	return &api.GetAllMoviesResponse{}, nil
}

func (s *movieServiceServer) CreateMovie(context context.Context, req *api.MovieRequest) (*api.CreateMovieResponse, error) {
	clog := logger.GetLoggerFromContext(context)

	clog.Info("Received request...")

	return &api.CreateMovieResponse{}, nil
}

func (s *movieServiceServer) GetMovie(context context.Context, req *api.MovieRequest) (*api.MovieResponse, error) {
	clog := logger.GetLoggerFromContext(context)

	clog.Info("Received request...")

	return &api.MovieResponse{}, nil
}

func (s *movieServiceServer) UpdateMovie(context context.Context, req *api.MovieRequest) (*api.MovieResponse, error) {
	clog := logger.GetLoggerFromContext(context)

	clog.Info("Received request...")

	return &api.MovieResponse{}, nil
}

func (s *movieServiceServer) DeleteMovie(context context.Context, req *api.MovieRequest) (*api.MovieResponse, error) {
	clog := logger.GetLoggerFromContext(context)

	clog.Info("Received request...")

	return &api.MovieResponse{}, nil
}
