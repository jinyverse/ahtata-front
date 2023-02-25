import styled from 'styled-components';
import Layout from 'components/common/Layout';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { todoAtom } from 'stores/gameDataAtom';
import { DroppableBoard } from 'components/dnd';
import DragabbleCard from 'components/dnd/DragabbleCard';

const Container = styled.div`
    width: 90%;
    padding: 20px;
    height: 300vh;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid whitesmoke;
    overflow-x: scroll;
    overflow-y: hidden;
    align-items: center;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #999999;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 5px;
    }
`;

function GamePage() {
    const [toDos, setToDos] = useRecoilState(todoAtom);
    const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
        if (!destination) return;
        setToDos(oldTodos => {
            const copyTodos = [...oldTodos];
            // 1. Delete item on source.index
            copyTodos.splice(source.index, 1);
            // 2. Put back the item on the destination.index
            copyTodos.splice(destination.index, 0, draggableId);
            return copyTodos;
        });
    };

    return (
        <Layout>
            <Container>
                <Wrapper>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="one" direction="horizontal">
                            {(provided, snapshot) => (
                                <DroppableBoard provided={provided}>
                                    {toDos.map((item, index) => (
                                        <DragabbleCard
                                            key={index}
                                            item={item}
                                            index={index}
                                        />
                                    ))}
                                </DroppableBoard>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Wrapper>
            </Container>
        </Layout>
    );
}

export default GamePage;
