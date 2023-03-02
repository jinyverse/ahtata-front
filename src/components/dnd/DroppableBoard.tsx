import styled from 'styled-components';
import { IDroppableBoardProps } from '@/types/dnd.type';

const Board = styled.div`
    display: flex;
    padding: 10px;
    float: left;
    width: 1000px;
`;

function DroppableBoard({ provided, children }: IDroppableBoardProps) {
    return (
        <Board ref={provided.innerRef} {...provided.droppableProps}>
            {children}
            {provided.placeholder}
        </Board>
    );
}
export { DroppableBoard };
