import { atom } from 'recoil';
import { IUserState } from '@/types/user.type';

export const userState = atom<IUserState>({
    key: 'userState',
    default: {
        isLoggedIn: false,
        isGameMode: false,
        id: '',
        name: '',
        point: '',
        profileImage: '',
    },
});
