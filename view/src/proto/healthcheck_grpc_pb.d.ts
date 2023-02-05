// package: 
// file: healthcheck.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as healthcheck_pb from "./healthcheck_pb";

interface IHealthCheckServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    status: IHealthCheckServiceService_IStatus;
}

interface IHealthCheckServiceService_IStatus extends grpc.MethodDefinition<healthcheck_pb.HealthCheckRequest, healthcheck_pb.HealthCheckResponse> {
    path: "/HealthCheckService/Status";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<healthcheck_pb.HealthCheckRequest>;
    requestDeserialize: grpc.deserialize<healthcheck_pb.HealthCheckRequest>;
    responseSerialize: grpc.serialize<healthcheck_pb.HealthCheckResponse>;
    responseDeserialize: grpc.deserialize<healthcheck_pb.HealthCheckResponse>;
}

export const HealthCheckServiceService: IHealthCheckServiceService;

export interface IHealthCheckServiceServer extends grpc.UntypedServiceImplementation {
    status: grpc.handleUnaryCall<healthcheck_pb.HealthCheckRequest, healthcheck_pb.HealthCheckResponse>;
}

export interface IHealthCheckServiceClient {
    status(request: healthcheck_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: healthcheck_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    status(request: healthcheck_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: healthcheck_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    status(request: healthcheck_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: healthcheck_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
}

export class HealthCheckServiceClient extends grpc.Client implements IHealthCheckServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public status(request: healthcheck_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: healthcheck_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    public status(request: healthcheck_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: healthcheck_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    public status(request: healthcheck_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: healthcheck_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
}
