import axios, {AxiosInstance} from "axios";
import { EnvironmentHelper } from "./EnvironmentHelper";
import { TestResponse } from "../proto/api_pb";
import { IPostResponse } from "../models/PostResponse";
import { ITestResponse } from "../models/ITestResponse";

const url = new EnvironmentHelper()

const grpcClient: AxiosInstance = axios.create({
    baseURL: url.baseUrl,
    headers: {
        'content-type': 'application/json',
    },
    //params: {base64_encoded: 'true', fields: 'stdout'},
});

export const api = {

    async getTest() {
        try{
            return await grpcClient.get<ITestResponse>("/v1/test")
                .then(res => {
                    console.log(res.data);
                    return res.data
                })
        }catch (err) {
            console.log("error" + err);
        }
    },

    async postName(name:string) {
        const data = {
            name: name,
        }

        try {
            return await grpcClient.post<IPostResponse>("/v1/name", data)
                .then(res => {
                    console.log("post data " + res.data.name)
                    return res.data
                })
        }catch (err) {
            console.log("error" + err);
        }
    }

}


