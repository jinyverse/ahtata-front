import axios, { AxiosHeaders, AxiosInstance } from 'axios';

export function initializeAxios(): AxiosInstance {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000',
        headers: {},
    });
    return axiosInstance;
}
