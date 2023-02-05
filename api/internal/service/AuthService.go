package service

import (
	"context"
	"github.com/movies/internal/utils/logger"
	"github.com/movies/proto/api"
)

type AuthServiceServer struct {
	api.UnimplementedAuthServiceServer
}

func NewAuthServiceServer() api.AuthServiceServer {
	return &AuthServiceServer{}
}

func (s *AuthServiceServer) Authentication(context context.Context, req *api.AuthenticationRequest) (*api.AuthenticationResponse, error) {
	clog := logger.GetLoggerFromContext(context)

	clog.Info("Received request...")

	return &api.AuthenticationResponse{}, nil
}

func (s *AuthServiceServer) Activation(context context.Context, req *api.ActivationRequest) (*api.ActivationResponse, error) {
	clog := logger.GetLoggerFromContext(context)

	clog.Info("Received request...")

	return &api.ActivationResponse{}, nil
}

func (s *AuthServiceServer) PasswordReset(context context.Context, req *api.PasswordResetRequest) (*api.PasswordResetResponse, error) {
	clog := logger.GetLoggerFromContext(context)

	clog.Info("Received request...")

	return &api.PasswordResetResponse{}, nil
}
