// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var blog_pb = require('./blog_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_BlogRequest(arg) {
  if (!(arg instanceof blog_pb.BlogRequest)) {
    throw new Error('Expected argument of type BlogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BlogRequest(buffer_arg) {
  return blog_pb.BlogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BlogResponse(arg) {
  if (!(arg instanceof blog_pb.BlogResponse)) {
    throw new Error('Expected argument of type BlogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BlogResponse(buffer_arg) {
  return blog_pb.BlogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateBlogRequest(arg) {
  if (!(arg instanceof blog_pb.CreateBlogRequest)) {
    throw new Error('Expected argument of type CreateBlogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateBlogRequest(buffer_arg) {
  return blog_pb.CreateBlogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateBlogResponse(arg) {
  if (!(arg instanceof blog_pb.CreateBlogResponse)) {
    throw new Error('Expected argument of type CreateBlogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateBlogResponse(buffer_arg) {
  return blog_pb.CreateBlogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetAllBlogsResponse(arg) {
  if (!(arg instanceof blog_pb.GetAllBlogsResponse)) {
    throw new Error('Expected argument of type GetAllBlogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetAllBlogsResponse(buffer_arg) {
  return blog_pb.GetAllBlogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BlogServiceService = exports.BlogServiceService = {
  getAllBlogs: {
    path: '/BlogService/GetAllBlogs',
    requestStream: false,
    responseStream: false,
    requestType: blog_pb.BlogRequest,
    responseType: blog_pb.GetAllBlogsResponse,
    requestSerialize: serialize_BlogRequest,
    requestDeserialize: deserialize_BlogRequest,
    responseSerialize: serialize_GetAllBlogsResponse,
    responseDeserialize: deserialize_GetAllBlogsResponse,
  },
  createBlog: {
    path: '/BlogService/CreateBlog',
    requestStream: false,
    responseStream: false,
    requestType: blog_pb.CreateBlogRequest,
    responseType: blog_pb.CreateBlogResponse,
    requestSerialize: serialize_CreateBlogRequest,
    requestDeserialize: deserialize_CreateBlogRequest,
    responseSerialize: serialize_CreateBlogResponse,
    responseDeserialize: deserialize_CreateBlogResponse,
  },
  getBlog: {
    path: '/BlogService/GetBlog',
    requestStream: false,
    responseStream: false,
    requestType: blog_pb.BlogRequest,
    responseType: blog_pb.BlogResponse,
    requestSerialize: serialize_BlogRequest,
    requestDeserialize: deserialize_BlogRequest,
    responseSerialize: serialize_BlogResponse,
    responseDeserialize: deserialize_BlogResponse,
  },
  updateBlog: {
    path: '/BlogService/UpdateBlog',
    requestStream: false,
    responseStream: false,
    requestType: blog_pb.BlogRequest,
    responseType: blog_pb.BlogResponse,
    requestSerialize: serialize_BlogRequest,
    requestDeserialize: deserialize_BlogRequest,
    responseSerialize: serialize_BlogResponse,
    responseDeserialize: deserialize_BlogResponse,
  },
  deleteBlog: {
    path: '/BlogService/DeleteBlog',
    requestStream: false,
    responseStream: false,
    requestType: blog_pb.BlogRequest,
    responseType: blog_pb.BlogResponse,
    requestSerialize: serialize_BlogRequest,
    requestDeserialize: deserialize_BlogRequest,
    responseSerialize: serialize_BlogResponse,
    responseDeserialize: deserialize_BlogResponse,
  },
};

exports.BlogServiceClient = grpc.makeGenericClientConstructor(BlogServiceService);
