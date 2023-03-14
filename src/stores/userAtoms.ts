import { atom } from 'recoil';

export const themeModeAtom = atom({
    key: 'isDarkMode',
    default: true,
});

export const userInfo = atom({
    key: 'userInfo',
    default: {
        id: '',
        name: '',
        point: '',
        profileImage: '',
    } as IUserInfo,
});

interface IUserState {
    isLoggedIn: boolean;
    isGameMode: boolean;
}
interface IUserInfo {
    id: string;
    name: string;
    point: string;
    profileImage: string;
}

export const userState = atom({
    key: 'userState',
    default: {
        isLoggedIn: false,
        isGameMode: false,
    } as IUserState,
});
