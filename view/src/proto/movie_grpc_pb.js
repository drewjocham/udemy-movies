// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var movie_pb = require('./movie_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');

function serialize_CreateMovieResponse(arg) {
  if (!(arg instanceof movie_pb.CreateMovieResponse)) {
    throw new Error('Expected argument of type CreateMovieResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateMovieResponse(buffer_arg) {
  return movie_pb.CreateMovieResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetAllMoviesResponse(arg) {
  if (!(arg instanceof movie_pb.GetAllMoviesResponse)) {
    throw new Error('Expected argument of type GetAllMoviesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetAllMoviesResponse(buffer_arg) {
  return movie_pb.GetAllMoviesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MovieRequest(arg) {
  if (!(arg instanceof movie_pb.MovieRequest)) {
    throw new Error('Expected argument of type MovieRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MovieRequest(buffer_arg) {
  return movie_pb.MovieRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MovieResponse(arg) {
  if (!(arg instanceof movie_pb.MovieResponse)) {
    throw new Error('Expected argument of type MovieResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MovieResponse(buffer_arg) {
  return movie_pb.MovieResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MovieServiceService = exports.MovieServiceService = {
  getAllMovies: {
    path: '/MovieService/GetAllMovies',
    requestStream: false,
    responseStream: false,
    requestType: movie_pb.MovieRequest,
    responseType: movie_pb.GetAllMoviesResponse,
    requestSerialize: serialize_MovieRequest,
    requestDeserialize: deserialize_MovieRequest,
    responseSerialize: serialize_GetAllMoviesResponse,
    responseDeserialize: deserialize_GetAllMoviesResponse,
  },
  createMovie: {
    path: '/MovieService/CreateMovie',
    requestStream: false,
    responseStream: false,
    requestType: movie_pb.MovieRequest,
    responseType: movie_pb.CreateMovieResponse,
    requestSerialize: serialize_MovieRequest,
    requestDeserialize: deserialize_MovieRequest,
    responseSerialize: serialize_CreateMovieResponse,
    responseDeserialize: deserialize_CreateMovieResponse,
  },
  getMovie: {
    path: '/MovieService/GetMovie',
    requestStream: false,
    responseStream: false,
    requestType: movie_pb.MovieRequest,
    responseType: movie_pb.MovieResponse,
    requestSerialize: serialize_MovieRequest,
    requestDeserialize: deserialize_MovieRequest,
    responseSerialize: serialize_MovieResponse,
    responseDeserialize: deserialize_MovieResponse,
  },
  updateMovie: {
    path: '/MovieService/UpdateMovie',
    requestStream: false,
    responseStream: false,
    requestType: movie_pb.MovieRequest,
    responseType: movie_pb.MovieResponse,
    requestSerialize: serialize_MovieRequest,
    requestDeserialize: deserialize_MovieRequest,
    responseSerialize: serialize_MovieResponse,
    responseDeserialize: deserialize_MovieResponse,
  },
  deleteMovie: {
    path: '/MovieService/DeleteMovie',
    requestStream: false,
    responseStream: false,
    requestType: movie_pb.MovieRequest,
    responseType: movie_pb.MovieResponse,
    requestSerialize: serialize_MovieRequest,
    requestDeserialize: deserialize_MovieRequest,
    responseSerialize: serialize_MovieResponse,
    responseDeserialize: deserialize_MovieResponse,
  },
};

exports.MovieServiceClient = grpc.makeGenericClientConstructor(MovieServiceService);
