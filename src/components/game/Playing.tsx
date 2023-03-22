import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { playStatusAtom, gameDeckAtom } from '@/stores/gameAtom';
import { DroppableBoard } from '@/components/dnd';
import DragabbleCard from '@/components/dnd/DragabbleCard';
import { useNavigate } from 'react-router-dom';
import { ICardData, IPlayStatus } from '@/types/game.type';
// import Timer from '@/components/common/Timer';
import { INIT_PLAY_STATUS } from '@/stores/gameAtom';

const appearAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Container = styled.div`
    width: 95%;
    padding: 10px;
    height: 300vh;
    animation: 1s ${appearAnimation};
    overflow: hidden;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 350px;
    border: 1px solid whitesmoke;
    overflow-x: scroll;
    overflow-y: hidden;
    align-items: center;
    &::-webkit-scrollbar {
        width: 10px;
        display: none;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #999999;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 5px;
    }
`;

const GivenCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    bottom: 0;
    background-color: yellowgreen;
`;

const deckDataFromServer = [
    { name: '첫번째', date: 1 },
    { name: '두번째', date: 2 },
    { name: '세번쨰', date: 3 },
    { name: '셋번쨰', date: 3 },
    // { name: '네번째', date: 4 },
    // { name: '다섯번째', date: 5 },
    // { name: '여섯번째', date: 6 },
    // { name: '일곱번째', date: 7 },
    // { name: '여덟번째', date: 8 },
    // { name: '아홈번째', date: 9 },
    // { name: '열번째', date: 10 },
    // { name: '열한번째', date: 11 },
];

export function Playing() {
    const navigate = useNavigate();
    // const [timeLeft, setTimeLeft] = useState(10);
    const [playStatus, setPlayStatus] = useRecoilState(playStatusAtom);
    const [deck, setDeck] = useRecoilState(gameDeckAtom);
    const [startedAt, _] = useState(Date.now());
    const { artist } = playStatus;

    // 아티스트 선택 완료 후 게임 플레이 화면 렌더링 시 동작
    useEffect(() => {
        // 선택된 아티스트가 없을 시
        // + 오류 alert 메세지 출력
        if (!artist) navigate('/');

        // 게임 초기 세팅
        initializeGameState();
    }, []);

    // 게임 상태 초기화
    const initializeGameState = async () => {
        // 선택된 아티스트 덱 요청 후 반환 데이터 저장
        const deckData = await reqGameDeck();

        setDeck(deckData);

        // 반환된 카드 덱 셔플하기
        const shuffledDeck = getShuffledDeck(deckData);

        setPlayStatus(prev => {
            return {
                ...prev,
                status: 'playing', // status 갱신: 게임 종료
                timeline: [shuffledDeck[0]], // 1장 카드 화면 배치
                given: [shuffledDeck[1]], // 첫번째 문제 카드 부여(given에 한장 추가)
                waitingList: shuffledDeck.slice(2),
            };
        });

        // 10초 타이머 시작
    };

    // 게임 덱 요청 함수 - service 폴더에 api요청 관련 함수들 따로 분리할 예정
    const reqGameDeck = async () => {
        // 서버로부터 받은 게임덱 반환
        console.log(`${artist} 덱 요청`);
        try {
            const deckData = deckDataFromServer; // await
            return deckData;
        } catch (err) {
            alert(err);
            navigate('/');
            return [];
        }
    };

    // 카드 셔플 함수
    const getShuffledDeck = (deck: ICardData[]) => {
        const newDeck = [...deck].sort(() => Math.random() - 0.5);
        return newDeck;
    };

    // 드래그 & 드랍 이벤트 핸들러
    const onDragEnd = (info: DropResult) => {
        // destination: 카드를 놓는 위치, source: 카드를 집었던 위치
        const { destination, source } = info;

        const destinationId = destination?.droppableId;
        const sourceId = source.droppableId;

        // 이미 배치된 카드 드래그 방지
        if (sourceId === 'timeline') return;

        // 배치 불가능한 영역으로 drop한 경우
        if (!destination) return;

        // 원래 있던 영역으로 드랍한 경우
        if (destinationId === sourceId) return;

        // 주어진 카드를 타임라인 배치 영역으로 drop한 경우
        if (destinationId === 'timeline' && sourceId === 'given') {
            // given 영역 카드
            const sourceCardList = [...playStatus.given];
            // timeline 영역 카드
            const destinationCardList = [...playStatus.timeline];
            // waiting list 영역 카드
            const waitingCardList = [...playStatus.waitingList];
            // given 영역에서 드래깅된 카드 추출
            const draggingCard = sourceCardList.splice(source.index, 1)[0];
            // timeline 영역 중 드래깅 카드가 드랍된 지점으로 카드 삽입
            destinationCardList.splice(destination?.index, 0, draggingCard);

            // waiting list에서 다음 문제 카드가 없을 경우는?
            if (waitingCardList.length !== 0) {
                const newGiven = waitingCardList.splice(0, 1)[0];
                sourceCardList.splice(0, 0, newGiven);
            }

            // 카드 상태 갱신
            const newPlayStatus = {
                ...playStatus,
                given: sourceCardList,
                timeline: destinationCardList,
                waitingList: waitingCardList,
            };
            setPlayStatus(newPlayStatus);

            // 드랍 후 카드 배치 정답을 확인하는 함수
            validateCardPosition(draggingCard, destination.index);
        }
    };

    // 드랍 후 카드 배치 정답을 확인하는 함수
    const validateCardPosition = (
        draggingCard: ICardData,
        destinationIndex: number,
    ) => {
        const timeline = playStatus.timeline;

        // 바로 앞의 카드와 시간 비교, 시간이 같아도 정답 인정
        const beforeCard = timeline[destinationIndex - 1];
        if (beforeCard && beforeCard.date > draggingCard.date) {
            return setGameEnd('incorrect');
        }

        // 오른쪽 카드와 시간 비교
        const afterCard = timeline[destinationIndex]; // 드랍된 카드가 갱신되기 전이라서 +1을 하지 않음, 해당 실행 컨텍스트가 모두 종료되어야 setState이 적용되기 때문
        if (afterCard && draggingCard.date > afterCard.date) {
            return setGameEnd('incorrect');
        }

        // 카드 배치 성공.
        // 1. 카드 배치 성공 이펙트
        // 2. 다음 given 카드 제시
    };

    const setGameEnd = (type: 'timeout' | 'incorrect' | 'finish') => {
        // 카드 배치 실패한 경우 실행.
        // 1. 카드 배치 실패 이펙트
        console.log('game over', type);

        setPlayStatus(prev => {
            return {
                ...prev,
                status: 'end', // status 갱신: 게임 종료
            };
        });
        // type === "timeout": 타이머 모두 경과 시
        // type === "incorrect": 카드 배치를 틀렸을 경우
        // type === "finish": 모든 문제를 풀었을 시
    };

    // 모든 카드 배치를 성공했을때
    useEffect(() => {
        const { status, given, waitingList } = playStatus;

        // 게임 플레이 중이 아닐때 제외
        if (status !== 'playing') return;

        // 모든 카드가 timeline에 배치되었을 경우 게임 종료
        if (given.length === 0 && waitingList.length === 0) {
            setGameEnd('finish');
        }
    }, [playStatus.waitingList]);

    // 게임 종료 시 실행
    useEffect(() => {
        // 게임 종료 여부 판별
        if (playStatus.status !== 'end') return;

        // 게임 경과 시간
        const totalPlayTime = (Date.now() - startedAt) / 1000;
        console.log('걸린 시간 = ', totalPlayTime, '초');

        // 게임 결과
        const solvedCardNum = playStatus.timeline.length;
        console.log('총 맞힌 카드 수 = ', solvedCardNum);

        reqGameResult();
    }, [playStatus.status]);

    // 게임 결과 페이지 요청, 게임 결과 서버로 전송
    const reqGameResult = async () => {
        // axios.post(...)
        // game status 초기화
        setPlayStatus(INIT_PLAY_STATUS);

        navigate('/game/result/1');
    };

    return (
        <Container>
            <DragDropContext onDragEnd={onDragEnd}>
                {/* 타임라인 카드 배치 영역 */}
                <Wrapper>
                    <Droppable droppableId="timeline" direction="horizontal">
                        {(provided, snapshot) => (
                            <DroppableBoard provided={provided}>
                                {playStatus.timeline.map((item, index) => (
                                    <DragabbleCard
                                        key={index}
                                        item={item.name}
                                        index={index}
                                        isTimelineCard={true} // 배치가 완료된 카드 드래그 방지
                                    />
                                ))}
                            </DroppableBoard>
                        )}
                    </Droppable>
                </Wrapper>
                {/* 주어진 카드가 배치되는 영역 */}
                <GivenCardWrapper>
                    <Droppable droppableId="given" direction="horizontal">
                        {provided => (
                            <DroppableBoard provided={provided}>
                                {playStatus.given.map((item, index) => (
                                    <DragabbleCard
                                        key={index}
                                        item={item.name}
                                        index={index}
                                    />
                                ))}
                            </DroppableBoard>
                        )}
                    </Droppable>
                </GivenCardWrapper>
            </DragDropContext>
        </Container>
    );
}
