import axios from "axios";
import { GetEnviroments } from "../helpers/GetEnviroments";
import { store } from "../app/store/Store";
const { VITE_BASE_URL } = GetEnviroments();
export const springBootAxios = axios.create({ baseURL: VITE_BASE_URL });
springBootAxios.interceptors.request.use(config => {
    const { token } = store.getState().auth;
    config.headers = {
        ...config.headers,
        Authorization: token ? `Bearer ${token}` : null
    };

    return config;
});
