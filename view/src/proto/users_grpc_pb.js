// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var users_pb = require('./users_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');

function serialize_GetUsersActiveRequest(arg) {
  if (!(arg instanceof users_pb.GetUsersActiveRequest)) {
    throw new Error('Expected argument of type GetUsersActiveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetUsersActiveRequest(buffer_arg) {
  return users_pb.GetUsersActiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetUsersActiveResponse(arg) {
  if (!(arg instanceof users_pb.GetUsersActiveResponse)) {
    throw new Error('Expected argument of type GetUsersActiveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetUsersActiveResponse(buffer_arg) {
  return users_pb.GetUsersActiveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetUsersPasswordRequest(arg) {
  if (!(arg instanceof users_pb.GetUsersPasswordRequest)) {
    throw new Error('Expected argument of type GetUsersPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetUsersPasswordRequest(buffer_arg) {
  return users_pb.GetUsersPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetUsersPasswordResponse(arg) {
  if (!(arg instanceof users_pb.GetUsersPasswordResponse)) {
    throw new Error('Expected argument of type GetUsersPasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetUsersPasswordResponse(buffer_arg) {
  return users_pb.GetUsersPasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetUsersRequest(arg) {
  if (!(arg instanceof users_pb.GetUsersRequest)) {
    throw new Error('Expected argument of type GetUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetUsersRequest(buffer_arg) {
  return users_pb.GetUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetUsersResponse(arg) {
  if (!(arg instanceof users_pb.GetUsersResponse)) {
    throw new Error('Expected argument of type GetUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetUsersResponse(buffer_arg) {
  return users_pb.GetUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUsers: {
    path: '/UserService/GetUsers',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetUsersRequest,
    responseType: users_pb.GetUsersResponse,
    requestSerialize: serialize_GetUsersRequest,
    requestDeserialize: deserialize_GetUsersRequest,
    responseSerialize: serialize_GetUsersResponse,
    responseDeserialize: deserialize_GetUsersResponse,
  },
  getUsersActive: {
    path: '/UserService/GetUsersActive',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetUsersActiveRequest,
    responseType: users_pb.GetUsersActiveResponse,
    requestSerialize: serialize_GetUsersActiveRequest,
    requestDeserialize: deserialize_GetUsersActiveRequest,
    responseSerialize: serialize_GetUsersActiveResponse,
    responseDeserialize: deserialize_GetUsersActiveResponse,
  },
  getUsersPassword: {
    path: '/UserService/GetUsersPassword',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetUsersPasswordRequest,
    responseType: users_pb.GetUsersPasswordResponse,
    requestSerialize: serialize_GetUsersPasswordRequest,
    requestDeserialize: deserialize_GetUsersPasswordRequest,
    responseSerialize: serialize_GetUsersPasswordResponse,
    responseDeserialize: deserialize_GetUsersPasswordResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
