// package: 
// file: blog.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as blog_pb from "./blog_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IBlogServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllBlogs: IBlogServiceService_IGetAllBlogs;
    createBlog: IBlogServiceService_ICreateBlog;
    getBlog: IBlogServiceService_IGetBlog;
    updateBlog: IBlogServiceService_IUpdateBlog;
    deleteBlog: IBlogServiceService_IDeleteBlog;
}

interface IBlogServiceService_IGetAllBlogs extends grpc.MethodDefinition<blog_pb.BlogRequest, blog_pb.GetAllBlogsResponse> {
    path: "/BlogService/GetAllBlogs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<blog_pb.BlogRequest>;
    requestDeserialize: grpc.deserialize<blog_pb.BlogRequest>;
    responseSerialize: grpc.serialize<blog_pb.GetAllBlogsResponse>;
    responseDeserialize: grpc.deserialize<blog_pb.GetAllBlogsResponse>;
}
interface IBlogServiceService_ICreateBlog extends grpc.MethodDefinition<blog_pb.CreateBlogRequest, blog_pb.CreateBlogResponse> {
    path: "/BlogService/CreateBlog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<blog_pb.CreateBlogRequest>;
    requestDeserialize: grpc.deserialize<blog_pb.CreateBlogRequest>;
    responseSerialize: grpc.serialize<blog_pb.CreateBlogResponse>;
    responseDeserialize: grpc.deserialize<blog_pb.CreateBlogResponse>;
}
interface IBlogServiceService_IGetBlog extends grpc.MethodDefinition<blog_pb.BlogRequest, blog_pb.BlogResponse> {
    path: "/BlogService/GetBlog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<blog_pb.BlogRequest>;
    requestDeserialize: grpc.deserialize<blog_pb.BlogRequest>;
    responseSerialize: grpc.serialize<blog_pb.BlogResponse>;
    responseDeserialize: grpc.deserialize<blog_pb.BlogResponse>;
}
interface IBlogServiceService_IUpdateBlog extends grpc.MethodDefinition<blog_pb.BlogRequest, blog_pb.BlogResponse> {
    path: "/BlogService/UpdateBlog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<blog_pb.BlogRequest>;
    requestDeserialize: grpc.deserialize<blog_pb.BlogRequest>;
    responseSerialize: grpc.serialize<blog_pb.BlogResponse>;
    responseDeserialize: grpc.deserialize<blog_pb.BlogResponse>;
}
interface IBlogServiceService_IDeleteBlog extends grpc.MethodDefinition<blog_pb.BlogRequest, blog_pb.BlogResponse> {
    path: "/BlogService/DeleteBlog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<blog_pb.BlogRequest>;
    requestDeserialize: grpc.deserialize<blog_pb.BlogRequest>;
    responseSerialize: grpc.serialize<blog_pb.BlogResponse>;
    responseDeserialize: grpc.deserialize<blog_pb.BlogResponse>;
}

export const BlogServiceService: IBlogServiceService;

export interface IBlogServiceServer extends grpc.UntypedServiceImplementation {
    getAllBlogs: grpc.handleUnaryCall<blog_pb.BlogRequest, blog_pb.GetAllBlogsResponse>;
    createBlog: grpc.handleUnaryCall<blog_pb.CreateBlogRequest, blog_pb.CreateBlogResponse>;
    getBlog: grpc.handleUnaryCall<blog_pb.BlogRequest, blog_pb.BlogResponse>;
    updateBlog: grpc.handleUnaryCall<blog_pb.BlogRequest, blog_pb.BlogResponse>;
    deleteBlog: grpc.handleUnaryCall<blog_pb.BlogRequest, blog_pb.BlogResponse>;
}

export interface IBlogServiceClient {
    getAllBlogs(request: blog_pb.BlogRequest, callback: (error: grpc.ServiceError | null, response: blog_pb.GetAllBlogsResponse) => void): grpc.ClientUnaryCall;
    getAllBlogs(request: blog_pb.BlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blog_pb.GetAllBlogsResponse) => void): grpc.ClientUnaryCall;
    getAllBlogs(request: blog_pb.BlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blog_pb.GetAllBlogsResponse) => void): grpc.ClientUnaryCall;
    createBlog(request: blog_pb.CreateBlogRequest, callback: (error: grpc.ServiceError | null, response: blog_pb.CreateBlogResponse) => void): grpc.ClientUnaryCall;
    createBlog(request: blog_pb.CreateBlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blog_pb.CreateBlogResponse) => void): grpc.ClientUnaryCall;
    createBlog(request: blog_pb.CreateBlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blog_pb.CreateBlogResponse) => void): grpc.ClientUnaryCall;
    getBlog(request: blog_pb.BlogRequest, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    getBlog(request: blog_pb.BlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    getBlog(request: blog_pb.BlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    updateBlog(request: blog_pb.BlogRequest, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    updateBlog(request: blog_pb.BlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    updateBlog(request: blog_pb.BlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    deleteBlog(request: blog_pb.BlogRequest, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    deleteBlog(request: blog_pb.BlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    deleteBlog(request: blog_pb.BlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
}

export class BlogServiceClient extends grpc.Client implements IBlogServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllBlogs(request: blog_pb.BlogRequest, callback: (error: grpc.ServiceError | null, response: blog_pb.GetAllBlogsResponse) => void): grpc.ClientUnaryCall;
    public getAllBlogs(request: blog_pb.BlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blog_pb.GetAllBlogsResponse) => void): grpc.ClientUnaryCall;
    public getAllBlogs(request: blog_pb.BlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blog_pb.GetAllBlogsResponse) => void): grpc.ClientUnaryCall;
    public createBlog(request: blog_pb.CreateBlogRequest, callback: (error: grpc.ServiceError | null, response: blog_pb.CreateBlogResponse) => void): grpc.ClientUnaryCall;
    public createBlog(request: blog_pb.CreateBlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blog_pb.CreateBlogResponse) => void): grpc.ClientUnaryCall;
    public createBlog(request: blog_pb.CreateBlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blog_pb.CreateBlogResponse) => void): grpc.ClientUnaryCall;
    public getBlog(request: blog_pb.BlogRequest, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public getBlog(request: blog_pb.BlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public getBlog(request: blog_pb.BlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public updateBlog(request: blog_pb.BlogRequest, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public updateBlog(request: blog_pb.BlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public updateBlog(request: blog_pb.BlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public deleteBlog(request: blog_pb.BlogRequest, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public deleteBlog(request: blog_pb.BlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public deleteBlog(request: blog_pb.BlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
}
