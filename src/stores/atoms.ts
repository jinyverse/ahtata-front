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

export const userState = atom({
    key: 'userState',
    default: {
        isLoggedIn: false,
        isPlayMode: false,
    },
});
