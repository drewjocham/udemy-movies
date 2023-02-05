// package: 
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TestRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): TestRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TestRequest): TestRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestRequest;
    static deserializeBinaryFromReader(message: TestRequest, reader: jspb.BinaryReader): TestRequest;
}

export namespace TestRequest {
    export type AsObject = {
        name: string,
    }
}

export class TestResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): TestResponse;
    getLastname(): string;
    setLastname(value: string): TestResponse;
    getAge(): string;
    setAge(value: string): TestResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TestResponse): TestResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestResponse;
    static deserializeBinaryFromReader(message: TestResponse, reader: jspb.BinaryReader): TestResponse;
}

export namespace TestResponse {
    export type AsObject = {
        name: string,
        lastname: string,
        age: string,
    }
}

export class TestPostRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): TestPostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestPostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TestPostRequest): TestPostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestPostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestPostRequest;
    static deserializeBinaryFromReader(message: TestPostRequest, reader: jspb.BinaryReader): TestPostRequest;
}

export namespace TestPostRequest {
    export type AsObject = {
        name: string,
    }
}
