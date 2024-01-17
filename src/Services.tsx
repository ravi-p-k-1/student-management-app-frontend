import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const baseURL = "http://localhost:4000";

const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error:AxiosError) => {
    return error;
  }
);

instance.interceptors.response.use(
  (response:AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    console.log("this is my log",error);
    if(error.code && error.code==="ECONNABORTED"){
        toast.error(error.message, {
            position: "top-right",
        });
    }
    if(error.code && error.code==="ERR_NETWORK"){
        toast.error(error.message, {
            position: "top-right",
        });
    }
    return error;
  }
);

export const ViewStudentServiceAPI = async () => {
  return await instance.get(`${baseURL}/api/v1/students`);
};
