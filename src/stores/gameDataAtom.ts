import { atom } from 'recoil';

interface IPlayStatus {
    [key: string]: ICorrecCardData[];
}

// 플레이 중인 유저 화면 데이터
export const playStatusAtom = atom<IPlayStatus>({
    key: 'timelineStaus',
    default: {
        timeline: [
            { name: '첫번째', date: '2023-01-01' },
            { name: '두번째', date: '2023-01-02' },
            { name: '네번쨰', date: '2023-01-04' },
        ],
        given: [{ name: '세번째', date: '2023-01-03' }],
    },
});

interface ICorrecCardData {
    name: string;
    date: string;
}

// 게임 정답 데이터
export const correctDataAtom = atom({
    key: 'correctStatus',
    default: [
        { name: '첫번째', date: '2023-01-01' },
        { name: '두번째', date: '2023-01-02' },
        { name: '네번쨰', date: '2023-01-04' },
        { name: '세번째', date: '2023-01-03' },
    ] as ICorrecCardData[],
});
