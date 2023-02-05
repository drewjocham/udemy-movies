// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var healthcheck_pb = require('./healthcheck_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');

function serialize_HealthCheckRequest(arg) {
  if (!(arg instanceof healthcheck_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type HealthCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HealthCheckRequest(buffer_arg) {
  return healthcheck_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_HealthCheckResponse(arg) {
  if (!(arg instanceof healthcheck_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type HealthCheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HealthCheckResponse(buffer_arg) {
  return healthcheck_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HealthCheckServiceService = exports.HealthCheckServiceService = {
  status: {
    path: '/HealthCheckService/Status',
    requestStream: false,
    responseStream: false,
    requestType: healthcheck_pb.HealthCheckRequest,
    responseType: healthcheck_pb.HealthCheckResponse,
    requestSerialize: serialize_HealthCheckRequest,
    requestDeserialize: deserialize_HealthCheckRequest,
    responseSerialize: serialize_HealthCheckResponse,
    responseDeserialize: deserialize_HealthCheckResponse,
  },
};

exports.HealthCheckServiceClient = grpc.makeGenericClientConstructor(HealthCheckServiceService);
