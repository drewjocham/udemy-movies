// package: 
// file: blog.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as protoc_gen_openapiv2_options_annotations_pb from "./protoc-gen-openapiv2/options/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class BlogRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): BlogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BlogRequest): BlogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogRequest;
    static deserializeBinaryFromReader(message: BlogRequest, reader: jspb.BinaryReader): BlogRequest;
}

export namespace BlogRequest {
    export type AsObject = {
        id: string,
    }
}

export class BlogAllRequest extends jspb.Message { 

    hasPage(): boolean;
    clearPage(): void;
    getPage(): number | undefined;
    setPage(value: number): BlogAllRequest;

    hasPerPage(): boolean;
    clearPerPage(): void;
    getPerPage(): number | undefined;
    setPerPage(value: number): BlogAllRequest;

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): SortOrder | undefined;
    setOrder(value: SortOrder): BlogAllRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BlogAllRequest): BlogAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogAllRequest;
    static deserializeBinaryFromReader(message: BlogAllRequest, reader: jspb.BinaryReader): BlogAllRequest;
}

export namespace BlogAllRequest {
    export type AsObject = {
        page?: number,
        perPage?: number,
        order?: SortOrder,
    }
}

export class BlogResponse extends jspb.Message { 

    hasBlog(): boolean;
    clearBlog(): void;
    getBlog(): Blog | undefined;
    setBlog(value?: Blog): BlogResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BlogResponse): BlogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogResponse;
    static deserializeBinaryFromReader(message: BlogResponse, reader: jspb.BinaryReader): BlogResponse;
}

export namespace BlogResponse {
    export type AsObject = {
        blog?: Blog.AsObject,
    }
}

export class GetAllBlogsResponse extends jspb.Message { 

    getBlogsMap(): jspb.Map<string, Blog>;
    clearBlogsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllBlogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllBlogsResponse): GetAllBlogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllBlogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllBlogsResponse;
    static deserializeBinaryFromReader(message: GetAllBlogsResponse, reader: jspb.BinaryReader): GetAllBlogsResponse;
}

export namespace GetAllBlogsResponse {
    export type AsObject = {

        blogsMap: Array<[string, Blog.AsObject]>,
    }
}

export class CreateBlogRequest extends jspb.Message { 

    hasBlog(): boolean;
    clearBlog(): void;
    getBlog(): Blog | undefined;
    setBlog(value?: Blog): CreateBlogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateBlogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateBlogRequest): CreateBlogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateBlogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateBlogRequest;
    static deserializeBinaryFromReader(message: CreateBlogRequest, reader: jspb.BinaryReader): CreateBlogRequest;
}

export namespace CreateBlogRequest {
    export type AsObject = {
        blog?: Blog.AsObject,
    }
}

export class CreateBlogResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateBlogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateBlogResponse): CreateBlogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateBlogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateBlogResponse;
    static deserializeBinaryFromReader(message: CreateBlogResponse, reader: jspb.BinaryReader): CreateBlogResponse;
}

export namespace CreateBlogResponse {
    export type AsObject = {
    }
}

export class Blog extends jspb.Message { 
    getId(): string;
    setId(value: string): Blog;

    hasCreatedat(): boolean;
    clearCreatedat(): void;
    getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): Blog;

    hasUpdatedat(): boolean;
    clearUpdatedat(): void;
    getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): Blog;
    getImagepath(): string;
    setImagepath(value: string): Blog;
    getType(): string;
    setType(value: string): Blog;
    getCategory(): string;
    setCategory(value: string): Blog;
    getTitle(): string;
    setTitle(value: string): Blog;
    getBody(): string;
    setBody(value: string): Blog;
    getVersion(): string;
    setVersion(value: string): Blog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Blog.AsObject;
    static toObject(includeInstance: boolean, msg: Blog): Blog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Blog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Blog;
    static deserializeBinaryFromReader(message: Blog, reader: jspb.BinaryReader): Blog;
}

export namespace Blog {
    export type AsObject = {
        id: string,
        createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        imagepath: string,
        type: string,
        category: string,
        title: string,
        body: string,
        version: string,
    }
}

export enum SortOrder {
    SORT_ORDER_UNKNOWN = 0,
    SORT_ORDER_ASC = 1,
    SORT_ORDER_DESC = 2,
}
