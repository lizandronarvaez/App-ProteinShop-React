import axios from "axios";
import { GetEnviroments } from "../helpers/GetEnviroments";

const { VITE_BASE_URL } = GetEnviroments();
export const springBootAxios = axios.create({ baseURL: VITE_BASE_URL });

const token = localStorage.getItem("token");
springBootAxios.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        Authorization: token ? `Bearer ${token}` : null
    };
    
    return config;
});
