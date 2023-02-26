import { DroppableProvided } from 'react-beautiful-dnd';

export interface IDragabbleCardProps {
    item: string;
    index: number;
    isTimelineCard?: boolean;
}

export interface IDroppableBoardProps {
    provided: DroppableProvided;
    children: React.ReactNode;
}
