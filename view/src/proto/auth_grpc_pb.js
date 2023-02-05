// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_pb = require('./auth_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');

function serialize_ActivationRequest(arg) {
  if (!(arg instanceof auth_pb.ActivationRequest)) {
    throw new Error('Expected argument of type ActivationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ActivationRequest(buffer_arg) {
  return auth_pb.ActivationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ActivationResponse(arg) {
  if (!(arg instanceof auth_pb.ActivationResponse)) {
    throw new Error('Expected argument of type ActivationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ActivationResponse(buffer_arg) {
  return auth_pb.ActivationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthenticationRequest(arg) {
  if (!(arg instanceof auth_pb.AuthenticationRequest)) {
    throw new Error('Expected argument of type AuthenticationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AuthenticationRequest(buffer_arg) {
  return auth_pb.AuthenticationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthenticationResponse(arg) {
  if (!(arg instanceof auth_pb.AuthenticationResponse)) {
    throw new Error('Expected argument of type AuthenticationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AuthenticationResponse(buffer_arg) {
  return auth_pb.AuthenticationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PasswordResetRequest(arg) {
  if (!(arg instanceof auth_pb.PasswordResetRequest)) {
    throw new Error('Expected argument of type PasswordResetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PasswordResetRequest(buffer_arg) {
  return auth_pb.PasswordResetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PasswordResetResponse(arg) {
  if (!(arg instanceof auth_pb.PasswordResetResponse)) {
    throw new Error('Expected argument of type PasswordResetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PasswordResetResponse(buffer_arg) {
  return auth_pb.PasswordResetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  authentication: {
    path: '/AuthService/Authentication',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.AuthenticationRequest,
    responseType: auth_pb.AuthenticationResponse,
    requestSerialize: serialize_AuthenticationRequest,
    requestDeserialize: deserialize_AuthenticationRequest,
    responseSerialize: serialize_AuthenticationResponse,
    responseDeserialize: deserialize_AuthenticationResponse,
  },
  activation: {
    path: '/AuthService/Activation',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.ActivationRequest,
    responseType: auth_pb.ActivationResponse,
    requestSerialize: serialize_ActivationRequest,
    requestDeserialize: deserialize_ActivationRequest,
    responseSerialize: serialize_ActivationResponse,
    responseDeserialize: deserialize_ActivationResponse,
  },
  passwordReset: {
    path: '/AuthService/PasswordReset',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.PasswordResetRequest,
    responseType: auth_pb.PasswordResetResponse,
    requestSerialize: serialize_PasswordResetRequest,
    requestDeserialize: deserialize_PasswordResetRequest,
    responseSerialize: serialize_PasswordResetResponse,
    responseDeserialize: deserialize_PasswordResetResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
