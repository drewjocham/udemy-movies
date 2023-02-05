// package: 
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as auth_pb from "./auth_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    authentication: IAuthServiceService_IAuthentication;
    activation: IAuthServiceService_IActivation;
    passwordReset: IAuthServiceService_IPasswordReset;
}

interface IAuthServiceService_IAuthentication extends grpc.MethodDefinition<auth_pb.AuthenticationRequest, auth_pb.AuthenticationResponse> {
    path: "/AuthService/Authentication";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.AuthenticationRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.AuthenticationRequest>;
    responseSerialize: grpc.serialize<auth_pb.AuthenticationResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.AuthenticationResponse>;
}
interface IAuthServiceService_IActivation extends grpc.MethodDefinition<auth_pb.ActivationRequest, auth_pb.ActivationResponse> {
    path: "/AuthService/Activation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.ActivationRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.ActivationRequest>;
    responseSerialize: grpc.serialize<auth_pb.ActivationResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.ActivationResponse>;
}
interface IAuthServiceService_IPasswordReset extends grpc.MethodDefinition<auth_pb.PasswordResetRequest, auth_pb.PasswordResetResponse> {
    path: "/AuthService/PasswordReset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.PasswordResetRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.PasswordResetRequest>;
    responseSerialize: grpc.serialize<auth_pb.PasswordResetResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.PasswordResetResponse>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer extends grpc.UntypedServiceImplementation {
    authentication: grpc.handleUnaryCall<auth_pb.AuthenticationRequest, auth_pb.AuthenticationResponse>;
    activation: grpc.handleUnaryCall<auth_pb.ActivationRequest, auth_pb.ActivationResponse>;
    passwordReset: grpc.handleUnaryCall<auth_pb.PasswordResetRequest, auth_pb.PasswordResetResponse>;
}

export interface IAuthServiceClient {
    authentication(request: auth_pb.AuthenticationRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthenticationResponse) => void): grpc.ClientUnaryCall;
    authentication(request: auth_pb.AuthenticationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthenticationResponse) => void): grpc.ClientUnaryCall;
    authentication(request: auth_pb.AuthenticationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthenticationResponse) => void): grpc.ClientUnaryCall;
    activation(request: auth_pb.ActivationRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.ActivationResponse) => void): grpc.ClientUnaryCall;
    activation(request: auth_pb.ActivationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.ActivationResponse) => void): grpc.ClientUnaryCall;
    activation(request: auth_pb.ActivationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.ActivationResponse) => void): grpc.ClientUnaryCall;
    passwordReset(request: auth_pb.PasswordResetRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.PasswordResetResponse) => void): grpc.ClientUnaryCall;
    passwordReset(request: auth_pb.PasswordResetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.PasswordResetResponse) => void): grpc.ClientUnaryCall;
    passwordReset(request: auth_pb.PasswordResetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.PasswordResetResponse) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public authentication(request: auth_pb.AuthenticationRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthenticationResponse) => void): grpc.ClientUnaryCall;
    public authentication(request: auth_pb.AuthenticationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthenticationResponse) => void): grpc.ClientUnaryCall;
    public authentication(request: auth_pb.AuthenticationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthenticationResponse) => void): grpc.ClientUnaryCall;
    public activation(request: auth_pb.ActivationRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.ActivationResponse) => void): grpc.ClientUnaryCall;
    public activation(request: auth_pb.ActivationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.ActivationResponse) => void): grpc.ClientUnaryCall;
    public activation(request: auth_pb.ActivationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.ActivationResponse) => void): grpc.ClientUnaryCall;
    public passwordReset(request: auth_pb.PasswordResetRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.PasswordResetResponse) => void): grpc.ClientUnaryCall;
    public passwordReset(request: auth_pb.PasswordResetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.PasswordResetResponse) => void): grpc.ClientUnaryCall;
    public passwordReset(request: auth_pb.PasswordResetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.PasswordResetResponse) => void): grpc.ClientUnaryCall;
}
