import React from 'react';
import TodoListItem from '../todoListItem/todoListItem';

function TodoList({data, onDelete, onMove, onChangeTodo}){

    const elements = data.map((item) => {
        const {id, ...todoData} = item;
        return (
            <li key={id}><TodoListItem 
                            {...todoData}
                            onDelete={() => onDelete(id)}
                            onMove={()=> onMove(id)}
                            onChangeTodo={()=> onChangeTodo(id)}    
                            /></li> 
        )
    })

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default TodoList;