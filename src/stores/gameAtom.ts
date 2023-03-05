import { atom } from 'recoil';
import { ICardData, IPlayStatus } from '@/types/game.type';

// 플레이 중인 유저 화면 데이터
export const playStatusAtom = atom<IPlayStatus>({
    key: 'playStaus',
    default: {
        artist: null,
        timeline: [],
        given: [],
        waitingList: [],
    },
});

// 게임 정답 데이터
export const gameDeckAtom = atom<ICardData[] | null>({
    key: 'deckStatus',
    default: null,
});
