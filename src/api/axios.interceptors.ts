import axios, {
    AxiosInstance,
    AxiosError,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios';

// axios 인터셉터를 설정
// 모든 axios 요청에 대해 공통된 설정(인증 정보나 헤더 정보 등) 적용 가능
// 요청이 실패했을 때 공통적인 에러 처리 수행

const baseURL = 'https://your-graphql-api-url.com';

const instance: AxiosInstance = axios.create({
    baseURL,
    timeout: 10000,
});

axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 요청을 보내기 전에 수행할 작업
        const newConfig = { ...config };
        newConfig.headers['Content-Type'] = 'application/json';

        return newConfig;
    },
    (error: AxiosError) => {
        // 요청 오류 처리
        return Promise.reject(error);
    },
);

axios.interceptors.response.use(
    (response: AxiosResponse) => {
        // 응답을 받은 후 수행할 작업
        return response;
    },
    (error: AxiosError) => {
        // 응답 오류 처리
        return Promise.reject(error);
    },
);

export default instance;
