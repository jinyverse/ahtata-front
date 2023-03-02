import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '@/stores/atoms';
import { playStatusAtom } from '@/stores/gameDataAtom';
import Layout from '@/components/common/Layout';
import { DroppableBoard } from '@/components/dnd';
import DragabbleCard from '@/components/dnd/DragabbleCard';

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

function GamePage() {
    const navigate = useNavigate();
    const status = useRecoilValue(userState);
    const [playStatus, setPlayStatus] = useRecoilState(playStatusAtom);

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
                const sourceCardList = [...allCardLists[sourceId]];
                const destinationCardList = [...allCardLists[destinationId]];
                const draggingCard = sourceCardList.splice(source.index, 1)[0];
                destinationCardList.splice(destination?.index, 0, draggingCard);
                return {
                    ...allCardLists,
                    [sourceId]: sourceCardList,
                    [destinationId]: destinationCardList,
                };
            });
        }

        // 드랍 후 카드 배치 정답을 확인하는 함수
        validateCardPosition();
    };

    // 드랍 후 카드 배치 정답을 확인하는 함수
    const validateCardPosition = () => {
        console.log('validate card after drop event');
        // 1. 카드 배치가 올바른지 판별
        // 2-1. 올바른 경우: 카드 배치 성공 이펙트, 다음 카드 불러오기
        // 2-2. 틀린 경우: 카드 배치 실패 이펙트, 게임 오버 화면 이동
        // 3. 게임 관련 상태 업데이트(새로 주어진 카드 recoil 등록 or 게임 오버 상태 변환)
    };

    // 새로고침 막기 변수
    const preventClose = (e: BeforeUnloadEvent) => {
        e.preventDefault();
        e.returnValue = ''; // chrome에서는 설정이 필요해서 넣은 코드
    };

    const preventGoBack = () => {
        if (
            confirm(
                '변경사항이 저장되지 않을 수 있습니다. 뒤로가기를 실행하시겠습니까?',
            )
        ) {
            history.go(-1);
        } else {
            history.pushState(null, '', location.href);
        }
    };

    // 뒤로가기 시 재확인
    useEffect(() => {
        // 새로고침 후 뒤로가기를 하면 동작하지 않음.
        history.pushState(null, '', location.href);
        window.addEventListener('popstate', preventGoBack);
        return () => window.removeEventListener('popstate', preventGoBack);
    }, []);

    // 새로고침 시 재확인
    useEffect(() => {
        window.addEventListener('beforeunload', preventClose);
        return () => window.removeEventListener('beforeunload', preventClose);
    }, []);

    // url을 타고 들어온 경우 방지
    useEffect(() => {
        if (status.isPlayMode === false) navigate('/');
    }, []);

    return (
        <Layout hasNotNav={true}>
            <Container>
                <DragDropContext onDragEnd={onDragEnd}>
                    {/* 타임라인 카드 배치 영역 */}
                    <Wrapper>
                        <Droppable
                            droppableId="timeline"
                            direction="horizontal"
                        >
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
        </Layout>
    );
}

export default GamePage;
