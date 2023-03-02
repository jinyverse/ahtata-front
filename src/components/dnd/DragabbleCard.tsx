import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { IDragabbleCardProps } from '@/types/dnd.type';

const Card = styled.div`
    color: black;
    width: 150px;
    height: 200px;
    box-sizing: border-box;
    background-color: yellow;
    margin: 5px;
`;

export function DragabbleCard({
    item,
    index,
    isTimelineCard,
}: IDragabbleCardProps) {
    return (
        <Draggable
            draggableId={item}
            index={index}
            key={item}
            isDragDisabled={isTimelineCard}
        >
            {provided => (
                <Card
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {item}
                </Card>
            )}
        </Draggable>
    );
}

export default React.memo(DragabbleCard);
