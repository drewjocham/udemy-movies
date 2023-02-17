package main

import (
	"context"
	"fmt"
	"github.com/movies/internal/config"
	"github.com/movies/internal/repository"
	"github.com/movies/internal/rest"
	"github.com/movies/internal/service"
	"github.com/movies/internal/utils/logger"
	"github.com/movies/proto/api"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"golang.org/x/sync/errgroup"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"net"
	"net/http"
	"strconv"
)

func startServer() error {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	clog := logger.GetLoggerFromContext(ctx)

	cfg, err := config.NewConfig()
	if err != nil {
		return err
	}

	g, _ := errgroup.WithContext(ctx)

	apiConn, err := grpc.Dial(
		cfg.Server.ServerAddress,
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpc.WithChainUnaryInterceptor())

	if err != nil {
		return err
	}
	defer func(apiConn *grpc.ClientConn) {
		err := apiConn.Close()
		if err != nil {
			clog.Error(err)
		}
	}(apiConn)

	listen, err := net.Listen("tcp", ":"+strconv.Itoa(cfg.Server.GRPCPort))
	if err != nil {
		return err
	}

	server := grpc.NewServer(grpc.ChainUnaryInterceptor())

	// mongo database connection
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(cfg.DB.Host))
	if err != nil {
		clog.Error(err)
	}

	defer func() {
		if err = client.Disconnect(ctx); err != nil {
			clog.Error(err)
		}
	}()

	//Blog Repository
	blogRepo := repository.NewBlogRepository(client, cfg)

	userRepo := repository.NewUserRepository(client, cfg)

	//UserService
	userService := service.NewUserServiceServer(userRepo)
	api.RegisterUserServiceServer(server, userService)

	//Auth Service
	authService := service.NewAuthServiceServer()
	api.RegisterAuthServiceServer(server, authService)

	//Blog Service
	blogService := service.NewBlogServiceServer(blogRepo)
	api.RegisterBlogServiceServer(server, blogService)

	// gRPC server
	g.Go(func() error {
		fmt.Println("Starting server on port", strconv.Itoa(cfg.Server.GRPCPort))

		return server.Serve(listen)
	})

	var httpServer http.Server

	// Run Http Server with gRPC gateway
	g.Go(func() error {
		fmt.Println("Starting Http sever (port {}) and gRPC gateway (port {})",
			strconv.Itoa(cfg.Server.HTTPPort),
			strconv.Itoa(cfg.Server.GRPCPort),
		)

		return rest.RunHttpServer(
			&httpServer,
			":"+strconv.Itoa(cfg.Server.HTTPPort),
			":"+strconv.Itoa(cfg.Server.GRPCPort),
			"/webapi",
		)
	})

	return g.Wait()

}

func main() {
	err := startServer()
	if err != nil {
		return
	}
}
