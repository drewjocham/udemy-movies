package data

import (
	"database/sql"
	"errors"
	"github.com/movies/internal/repository"
)

var (
	ErrRecordNotFound = errors.New("record not found")
	ErrEditConflict   = errors.New("edit conflict")
)

type Models struct {
	Blogs  repository.BlogRepository
	Movies repository.MovieRepository
}

func NewModels(db *sql.DB) Models {
	return Models{
		//Movies:      repository.MovieRepository{DB: db},
	}
}
