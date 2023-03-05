import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { playStatusAtom, gameDeckAtom } from '@/stores/gameAtom';
import { DroppableBoard } from '@/components/dnd';
import DragabbleCard from '@/components/dnd/DragabbleCard';
import { useNavigate } from 'react-router-dom';
import { ICardData, IPlayStatus } from '@/types/game.type';

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
    { name: '첫번째', date: '2023-01-01' },
    { name: '두번째', date: '2023-01-02' },
    { name: '세번쨰', date: '2023-01-03' },
    { name: '네번째', date: '2023-01-04' },
    { name: '다섯번째', date: '2023-01-05' },
    { name: '여섯번째', date: '2023-01-06' },
    { name: '일곱번째', date: '2023-01-07' },
    { name: '여덟번째', date: '2023-01-08' },
    { name: '아홈번째', date: '2023-01-09' },
    { name: '열번째', date: '2023-01-10' },
    { name: '열한번째', date: '2023-01-11' },
];

export function Playing() {
    const navigate = useNavigate();
    const [playStatus, setPlayStatus] = useRecoilState(playStatusAtom);
    const [deck, setDeck] = useRecoilState(gameDeckAtom);
    const { artist } = playStatus;

    // 아티스트 선택 완료 후 게임 플레이 화면 렌더링 시 동작
    useEffect(() => {
        // 선택된 아티스트가 없을 시
        // + 오류 alert 메세지 출력
        if (!artist) navigate('/');

        // 게임 초기 세팅
        initializeGameState();
    }, []);

    const initializeGameState = async () => {
        // 선택된 아티스트 게임 플레이 덱 요청 후 세팅
        const deckData = await reqGameDeck();

        setDeck(deckData);

        // 반환된 카드 덱 셔플하기
        const shuffleDeck = getShuffleDeck(deckData);

        setPlayStatus(status => {
            return {
                ...status,
                timeline: [shuffleDeck[0]], // 1장 카드 화면 배치
                given: [shuffleDeck[1]], // 첫번째 문제 카드 부여(given에 한장 추가)
                waitingList: shuffleDeck.slice(2),
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
    const getShuffleDeck = (deck: ICardData[]) => {
        const newDeck = [...deck].sort(() => Math.random() - 0.5);
        return newDeck;
    };

    // 드래그 & 드랍 이벤트 핸들러
    const onDragEnd = (info: DropResult) => {
        // destination: 카드를 놓는 위치, source: 카드를 집었던 위치
        const { destination, source } = info;

        const destinationId = destination?.droppableId;
        const sourceId = source.droppableId;

        // 배치 불가능한 영역으로 drop한 경우
        if (!destination) return;

        // 이미 배치된 카드 드래그의 이벤트 방지
        if (sourceId === 'timeline') return;

        // 원래 있던 영역으로 드랍한 경우
        if (destinationId === sourceId) return;

        // 주어진 카드를 타임라인 배치 영역으로 drop한 경우
        if (destinationId === 'timeline' && sourceId === 'given') {
            setPlayStatus(allCardLists => {
                // given 영역 카드
                const sourceCardList = [...allCardLists.given];
                // timeline 영역 카드
                const destinationCardList = [...allCardLists.timeline];
                // waiting list 영역 카드
                const waitingCardList = [...allCardLists.waitingList];

                // given 영역에서 드래깅된 카드 추출
                const draggingCard = sourceCardList.splice(source.index, 1)[0];
                // timeline 영역 중 드래깅 카드가 드랍된 지점으로 카드 삽입
                destinationCardList.splice(destination?.index, 0, draggingCard);

                // waiting list에서 다음 문제 카드가 없을 경우
                if (waitingCardList.length !== 0) {
                    const newGiven = waitingCardList.splice(0, 1)[0];
                    sourceCardList.splice(0, 0, newGiven);
                }

                const newPlayStatus = {
                    ...allCardLists,
                    given: sourceCardList,
                    timeline: destinationCardList,
                    waitingList: waitingCardList,
                };

                return newPlayStatus;
            });
        }

        // 드랍 후 카드 배치 정답을 확인하는 함수
        // validateCardPosition(newPlayStatus);
    };

    // 카드 드랍 시 실행 됨
    useEffect(() => {
        // 초반에 카드가 배치될 때 제외
        if (playStatus.timeline.length < 2) return;

        // 카드 배치가 올바른지 판별
        validateCardPosition();
        console.log(playStatus.waitingList.length);
    }, [playStatus.timeline]);

    // 드랍 후 카드 배치 정답을 확인하는 함수
    const validateCardPosition = () => {
        console.log('validate card after drop event', playStatus.timeline);
        const isValidate = true;

        if (!isValidate) {
            console.log('게임 오버');
        }

        // 2-1. 올바른 경우: 카드 배치 성공 이펙트, 다음 카드 불러오기
        // 2-2. 틀린 경우: 카드 배치 실패 이펙트, 게임 오버 화면 이동
        // 3. 게임 관련 상태 업데이트(새로 주어진 카드 recoil 등록 or 게임 오버 상태 변환)
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
