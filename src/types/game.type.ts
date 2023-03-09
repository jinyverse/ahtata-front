// game 관련 타입

export interface ICardData {
    name: string;
    date: number;
}

export interface IPlayStatus {
    /**
     * status 상세 설명
     * init: 최초 화면, 카드 한장 배치된 상태, before & after 보이는 시점
     * play: 게임 플레이, 카드 드랍 전까지의 시점
     * correct: 카드 드랍 이후 판별식 통과한 시점, 잠시 동안 정답 이펙트 효과 발생 -> 다음 카드 혹은 게임 결과 페이지로 이동
     * incorrect: 카드 드랍 이후 오답 판정 상태, 잠시 동안 오답 이펙트 효과 발생 -> 게임 결과(게임 오버) 페이지로 이동
     */
    status: 'init' | 'play' | 'correct' | 'incorrect';
    artist: string | null;
    timeline: ICardData[];
    given: ICardData[];
    waitingList: ICardData[];
}
