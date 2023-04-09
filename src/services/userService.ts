import Api from '@/api/axios.interceptors';

interface IUserData {
    nickname: string;
    password: string;
}

export async function submitSignIn(userData: IUserData) {
    try {
        const res = await Api.post('/members/login', userData);
        return res;
    } catch (e: any) {
        console.log(e);
    }
}

export async function submitSignUp(userData: IUserData) {
    try {
        const res = await Api.post('/members', userData);
        return res;
    } catch (e: any) {
        console.log(e);
    }
}
