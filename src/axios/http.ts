import axios, { AxiosInstance } from "axios";

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.SERVER_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Add a request interceptor
    this.instance.interceptors.request.use(async (config) => {
      //do some thing
      return config;
    });

    // Add response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error.response.data.message);
        return error.response;
      }
    );
  }
}

const http = new Http().instance;

export default http;
