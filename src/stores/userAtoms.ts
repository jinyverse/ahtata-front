import { atom } from 'recoil';

export const themeModeAtom = atom({
    key: 'isDarkMode',
    default: true,
});

export const userInfo = atom({
    key: 'userInfo',
    default: {
        id: null,
        name: null,
        point: null,
        profileImage: '',
    },
});

interface IUserState {
    isLoggedIn: boolean;
    isGameMode: boolean;
}

export const userState = atom({
    key: 'userState',
    default: {
        isLoggedIn: false,
        isGameMode: false,
    } as IUserState,
});
