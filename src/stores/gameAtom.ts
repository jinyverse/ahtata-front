import { atom } from 'recoil';
import { ICardData, IPlayStatus } from '@/types/game.type';

export const INIT_PLAY_STATUS = {
    status: 'init',
    artist: null,
    timeline: [],
    given: [],
    waitingList: [],
} as IPlayStatus;

// 플레이 중인 유저 화면 데이터
export const playStatusAtom = atom<IPlayStatus>({
    key: 'playStatus',
    default: INIT_PLAY_STATUS,
});

// 게임 정답 데이터
export const gameDeckAtom = atom<ICardData[] | null>({
    key: 'deckStatus',
    default: null,
});
