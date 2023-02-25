import { DroppableProvided } from 'react-beautiful-dnd';

export interface IDragabbleCardProps {
    item: string;
    index: number;
}

export interface IDroppableBoardProps {
    provided: DroppableProvided;
    children: React.ReactNode;
}
