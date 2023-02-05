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
	Host     int    `envconfig:"DB_HOST" default:""`
	URL      int    `envconfig:"DB_URL" default:""`
	Password string `envconfig:"DB_PASSWORD" default:""`
}

type Config struct {
	Server ServerConfig
}

func NewConfig() (*Config, error) {
	var c Config

	err := envconfig.Process("", &c)

	if err != nil {
		return nil, err
	}

	return &c, nil
}
