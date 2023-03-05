// game 관련 타입

export interface ICardData {
    name: string;
    date: string;
}

export interface IPlayStatus {
    artist: string | null;
    timeline: ICardData[];
    given: ICardData[];
    waitingList: ICardData[];
}
