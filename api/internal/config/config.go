package config

import (
	"github.com/kelseyhightower/envconfig"
)

type ServerConfig struct {
	HTTPPort      int    `envconfig:"HTTP_PORT" default:"8081"`
	GRPCPort      int    `envconfig:"GRPC_PORT" default:"8082"`
	ServerAddress string `envconfig:"SERVER_ADDRESS" default:"localhost:8082"`
}

type Database struct {
	Host     string `envconfig:"DB_HOST" default:"mongodb+srv://drew:OCaOh7Fb6eY5bqPem4ZOwA@cluster0.mqj7m.mongodb.net/?retryWrites=true&w=majority"`
	URL      string `envconfig:"DB_URL" default:""`
	Password string `envconfig:"DB_PASSWORD" default:"OCaOh7Fb6eY5bqPem4ZOwA"`
}

type BlogRepoConfig struct {
	Database   string `envconfig:"DB_BLOG_DB_NAME" default:"data"`
	Collection string `envconfig:"DB_BLOG_COLLECTION_NAME" default:"demo"`
}

type UserRepoConfig struct {
	Database   string `envconfig:"DB_USER_DB_NAME" default:"data"`
	Collection string `envconfig:"DB_USER_COLLECTION_NAME" default:"demo"`
}

type Config struct {
	Server     ServerConfig
	BlogConfig BlogRepoConfig
	UserConfig UserRepoConfig
	DB         Database
}

func NewConfig() (*Config, error) {
	var c Config

	err := envconfig.Process("", &c)

	if err != nil {
		return nil, err
	}

	return &c, nil
}
