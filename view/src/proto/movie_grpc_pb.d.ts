// package: 
// file: movie.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as movie_pb from "./movie_pb";

interface IMovieServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllMovies: IMovieServiceService_IGetAllMovies;
    createMovie: IMovieServiceService_ICreateMovie;
    getMovie: IMovieServiceService_IGetMovie;
    updateMovie: IMovieServiceService_IUpdateMovie;
    deleteMovie: IMovieServiceService_IDeleteMovie;
}

interface IMovieServiceService_IGetAllMovies extends grpc.MethodDefinition<movie_pb.MovieRequest, movie_pb.GetAllMoviesResponse> {
    path: "/MovieService/GetAllMovies";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<movie_pb.MovieRequest>;
    requestDeserialize: grpc.deserialize<movie_pb.MovieRequest>;
    responseSerialize: grpc.serialize<movie_pb.GetAllMoviesResponse>;
    responseDeserialize: grpc.deserialize<movie_pb.GetAllMoviesResponse>;
}
interface IMovieServiceService_ICreateMovie extends grpc.MethodDefinition<movie_pb.MovieRequest, movie_pb.CreateMovieResponse> {
    path: "/MovieService/CreateMovie";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<movie_pb.MovieRequest>;
    requestDeserialize: grpc.deserialize<movie_pb.MovieRequest>;
    responseSerialize: grpc.serialize<movie_pb.CreateMovieResponse>;
    responseDeserialize: grpc.deserialize<movie_pb.CreateMovieResponse>;
}
interface IMovieServiceService_IGetMovie extends grpc.MethodDefinition<movie_pb.MovieRequest, movie_pb.MovieResponse> {
    path: "/MovieService/GetMovie";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<movie_pb.MovieRequest>;
    requestDeserialize: grpc.deserialize<movie_pb.MovieRequest>;
    responseSerialize: grpc.serialize<movie_pb.MovieResponse>;
    responseDeserialize: grpc.deserialize<movie_pb.MovieResponse>;
}
interface IMovieServiceService_IUpdateMovie extends grpc.MethodDefinition<movie_pb.MovieRequest, movie_pb.MovieResponse> {
    path: "/MovieService/UpdateMovie";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<movie_pb.MovieRequest>;
    requestDeserialize: grpc.deserialize<movie_pb.MovieRequest>;
    responseSerialize: grpc.serialize<movie_pb.MovieResponse>;
    responseDeserialize: grpc.deserialize<movie_pb.MovieResponse>;
}
interface IMovieServiceService_IDeleteMovie extends grpc.MethodDefinition<movie_pb.MovieRequest, movie_pb.MovieResponse> {
    path: "/MovieService/DeleteMovie";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<movie_pb.MovieRequest>;
    requestDeserialize: grpc.deserialize<movie_pb.MovieRequest>;
    responseSerialize: grpc.serialize<movie_pb.MovieResponse>;
    responseDeserialize: grpc.deserialize<movie_pb.MovieResponse>;
}

export const MovieServiceService: IMovieServiceService;

export interface IMovieServiceServer extends grpc.UntypedServiceImplementation {
    getAllMovies: grpc.handleUnaryCall<movie_pb.MovieRequest, movie_pb.GetAllMoviesResponse>;
    createMovie: grpc.handleUnaryCall<movie_pb.MovieRequest, movie_pb.CreateMovieResponse>;
    getMovie: grpc.handleUnaryCall<movie_pb.MovieRequest, movie_pb.MovieResponse>;
    updateMovie: grpc.handleUnaryCall<movie_pb.MovieRequest, movie_pb.MovieResponse>;
    deleteMovie: grpc.handleUnaryCall<movie_pb.MovieRequest, movie_pb.MovieResponse>;
}

export interface IMovieServiceClient {
    getAllMovies(request: movie_pb.MovieRequest, callback: (error: grpc.ServiceError | null, response: movie_pb.GetAllMoviesResponse) => void): grpc.ClientUnaryCall;
    getAllMovies(request: movie_pb.MovieRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: movie_pb.GetAllMoviesResponse) => void): grpc.ClientUnaryCall;
    getAllMovies(request: movie_pb.MovieRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: movie_pb.GetAllMoviesResponse) => void): grpc.ClientUnaryCall;
    createMovie(request: movie_pb.MovieRequest, callback: (error: grpc.ServiceError | null, response: movie_pb.CreateMovieResponse) => void): grpc.ClientUnaryCall;
    createMovie(request: movie_pb.MovieRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: movie_pb.CreateMovieResponse) => void): grpc.ClientUnaryCall;
    createMovie(request: movie_pb.MovieRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: movie_pb.CreateMovieResponse) => void): grpc.ClientUnaryCall;
    getMovie(request: movie_pb.MovieRequest, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
    getMovie(request: movie_pb.MovieRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
    getMovie(request: movie_pb.MovieRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
    updateMovie(request: movie_pb.MovieRequest, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
    updateMovie(request: movie_pb.MovieRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
    updateMovie(request: movie_pb.MovieRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
    deleteMovie(request: movie_pb.MovieRequest, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
    deleteMovie(request: movie_pb.MovieRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
    deleteMovie(request: movie_pb.MovieRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
}

export class MovieServiceClient extends grpc.Client implements IMovieServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllMovies(request: movie_pb.MovieRequest, callback: (error: grpc.ServiceError | null, response: movie_pb.GetAllMoviesResponse) => void): grpc.ClientUnaryCall;
    public getAllMovies(request: movie_pb.MovieRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: movie_pb.GetAllMoviesResponse) => void): grpc.ClientUnaryCall;
    public getAllMovies(request: movie_pb.MovieRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: movie_pb.GetAllMoviesResponse) => void): grpc.ClientUnaryCall;
    public createMovie(request: movie_pb.MovieRequest, callback: (error: grpc.ServiceError | null, response: movie_pb.CreateMovieResponse) => void): grpc.ClientUnaryCall;
    public createMovie(request: movie_pb.MovieRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: movie_pb.CreateMovieResponse) => void): grpc.ClientUnaryCall;
    public createMovie(request: movie_pb.MovieRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: movie_pb.CreateMovieResponse) => void): grpc.ClientUnaryCall;
    public getMovie(request: movie_pb.MovieRequest, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
    public getMovie(request: movie_pb.MovieRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
    public getMovie(request: movie_pb.MovieRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
    public updateMovie(request: movie_pb.MovieRequest, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
    public updateMovie(request: movie_pb.MovieRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
    public updateMovie(request: movie_pb.MovieRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
    public deleteMovie(request: movie_pb.MovieRequest, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
    public deleteMovie(request: movie_pb.MovieRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
    public deleteMovie(request: movie_pb.MovieRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: movie_pb.MovieResponse) => void): grpc.ClientUnaryCall;
}
