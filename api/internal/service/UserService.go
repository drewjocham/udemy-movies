package service

import (
	"context"
	"github.com/movies/internal/utils/logger"
	"github.com/movies/proto/api"
)

type userServiceServer struct {
	api.UnimplementedUserServiceServer
}

func NewUserServiceServer() api.UserServiceServer {
	return &userServiceServer{}
}

func (u *userServiceServer) GetUsers(context context.Context, req *api.GetUsersRequest) (*api.GetUsersResponse, error) {
	clog := logger.GetLoggerFromContext(context)

	clog.Info("Received request...")

	return &api.GetUsersResponse{}, nil
}

func (u *userServiceServer) GetUsersActive(context context.Context, req *api.GetUsersActiveRequest) (*api.GetUsersActiveResponse, error) {
	clog := logger.GetLoggerFromContext(context)

	clog.Info("Received request...")

	return &api.GetUsersActiveResponse{}, nil
}

func (u *userServiceServer) GetUsersPassword(context context.Context, req *api.GetUsersPasswordRequest) (*api.GetUsersPasswordResponse, error) {
	clog := logger.GetLoggerFromContext(context)

	clog.Info("Received request...")

	return &api.GetUsersPasswordResponse{}, nil
}
