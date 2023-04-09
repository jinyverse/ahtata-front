export interface IUserState {
    isLoggedIn: boolean;
    isGameMode: boolean;
    id: string;
    name: string;
    point: string;
    profileImage: string;
}

export interface SignFormData {
    nickname: string;
    password: string;
}
