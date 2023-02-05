// package: 
// file: movie.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class MovieRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): MovieRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MovieRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MovieRequest): MovieRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MovieRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MovieRequest;
    static deserializeBinaryFromReader(message: MovieRequest, reader: jspb.BinaryReader): MovieRequest;
}

export namespace MovieRequest {
    export type AsObject = {
        id: string,
    }
}

export class MovieResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MovieResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MovieResponse): MovieResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MovieResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MovieResponse;
    static deserializeBinaryFromReader(message: MovieResponse, reader: jspb.BinaryReader): MovieResponse;
}

export namespace MovieResponse {
    export type AsObject = {
    }
}

export class GetAllMoviesResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllMoviesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllMoviesResponse): GetAllMoviesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllMoviesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllMoviesResponse;
    static deserializeBinaryFromReader(message: GetAllMoviesResponse, reader: jspb.BinaryReader): GetAllMoviesResponse;
}

export namespace GetAllMoviesResponse {
    export type AsObject = {
    }
}

export class CreateMovie extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateMovie.AsObject;
    static toObject(includeInstance: boolean, msg: CreateMovie): CreateMovie.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateMovie, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateMovie;
    static deserializeBinaryFromReader(message: CreateMovie, reader: jspb.BinaryReader): CreateMovie;
}

export namespace CreateMovie {
    export type AsObject = {
    }
}

export class CreateMovieResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateMovieResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateMovieResponse): CreateMovieResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateMovieResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateMovieResponse;
    static deserializeBinaryFromReader(message: CreateMovieResponse, reader: jspb.BinaryReader): CreateMovieResponse;
}

export namespace CreateMovieResponse {
    export type AsObject = {
    }
}
