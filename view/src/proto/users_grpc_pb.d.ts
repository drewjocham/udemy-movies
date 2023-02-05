// package: 
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as users_pb from "./users_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUsers: IUserServiceService_IGetUsers;
    getUsersActive: IUserServiceService_IGetUsersActive;
    getUsersPassword: IUserServiceService_IGetUsersPassword;
}

interface IUserServiceService_IGetUsers extends grpc.MethodDefinition<users_pb.GetUsersRequest, users_pb.GetUsersResponse> {
    path: "/UserService/GetUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.GetUsersRequest>;
    requestDeserialize: grpc.deserialize<users_pb.GetUsersRequest>;
    responseSerialize: grpc.serialize<users_pb.GetUsersResponse>;
    responseDeserialize: grpc.deserialize<users_pb.GetUsersResponse>;
}
interface IUserServiceService_IGetUsersActive extends grpc.MethodDefinition<users_pb.GetUsersActiveRequest, users_pb.GetUsersActiveResponse> {
    path: "/UserService/GetUsersActive";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.GetUsersActiveRequest>;
    requestDeserialize: grpc.deserialize<users_pb.GetUsersActiveRequest>;
    responseSerialize: grpc.serialize<users_pb.GetUsersActiveResponse>;
    responseDeserialize: grpc.deserialize<users_pb.GetUsersActiveResponse>;
}
interface IUserServiceService_IGetUsersPassword extends grpc.MethodDefinition<users_pb.GetUsersPasswordRequest, users_pb.GetUsersPasswordResponse> {
    path: "/UserService/GetUsersPassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.GetUsersPasswordRequest>;
    requestDeserialize: grpc.deserialize<users_pb.GetUsersPasswordRequest>;
    responseSerialize: grpc.serialize<users_pb.GetUsersPasswordResponse>;
    responseDeserialize: grpc.deserialize<users_pb.GetUsersPasswordResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    getUsers: grpc.handleUnaryCall<users_pb.GetUsersRequest, users_pb.GetUsersResponse>;
    getUsersActive: grpc.handleUnaryCall<users_pb.GetUsersActiveRequest, users_pb.GetUsersActiveResponse>;
    getUsersPassword: grpc.handleUnaryCall<users_pb.GetUsersPasswordRequest, users_pb.GetUsersPasswordResponse>;
}

export interface IUserServiceClient {
    getUsers(request: users_pb.GetUsersRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: users_pb.GetUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: users_pb.GetUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    getUsersActive(request: users_pb.GetUsersActiveRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersActiveResponse) => void): grpc.ClientUnaryCall;
    getUsersActive(request: users_pb.GetUsersActiveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersActiveResponse) => void): grpc.ClientUnaryCall;
    getUsersActive(request: users_pb.GetUsersActiveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersActiveResponse) => void): grpc.ClientUnaryCall;
    getUsersPassword(request: users_pb.GetUsersPasswordRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersPasswordResponse) => void): grpc.ClientUnaryCall;
    getUsersPassword(request: users_pb.GetUsersPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersPasswordResponse) => void): grpc.ClientUnaryCall;
    getUsersPassword(request: users_pb.GetUsersPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersPasswordResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUsers(request: users_pb.GetUsersRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: users_pb.GetUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: users_pb.GetUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    public getUsersActive(request: users_pb.GetUsersActiveRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersActiveResponse) => void): grpc.ClientUnaryCall;
    public getUsersActive(request: users_pb.GetUsersActiveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersActiveResponse) => void): grpc.ClientUnaryCall;
    public getUsersActive(request: users_pb.GetUsersActiveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersActiveResponse) => void): grpc.ClientUnaryCall;
    public getUsersPassword(request: users_pb.GetUsersPasswordRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersPasswordResponse) => void): grpc.ClientUnaryCall;
    public getUsersPassword(request: users_pb.GetUsersPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersPasswordResponse) => void): grpc.ClientUnaryCall;
    public getUsersPassword(request: users_pb.GetUsersPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetUsersPasswordResponse) => void): grpc.ClientUnaryCall;
}
