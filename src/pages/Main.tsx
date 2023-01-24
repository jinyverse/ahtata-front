import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

function Main() {
    const onDragEnd = () => {
        console.log('hello')
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <Droppable droppableId="one">
                    {(provided) => (
                        <ul
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <Draggable draggableId="first" index={0}>
                                {(provided) => (
                                    <li
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        One
                                    </li>
                                )}
                            </Draggable>
                            <Draggable draggableId="second" index={1}>
                                {(provided) => (
                                    <li
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        Two
                                    </li>
                                )}
                            </Draggable>
                        </ul>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    )
}

export default Main
