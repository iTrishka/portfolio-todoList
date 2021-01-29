import React from 'react';
import CompletedListItem from '../completedListItem/completedListItem';

import './completedList.css'

function CompletedList({completeTodo, onMove, onDelete}){
    
    const completeElement = completeTodo.map((item)=> {
        const {id, ...comData} = item;
        return <li key={id}> <CompletedListItem 
                                {...comData} 
                                onMove={()=> onMove(id)}
                                onDelete={()=> onDelete(id)}
                                /> </li>
    })

    return (
        <>
            <ul >
                {completeElement}
            </ul>
        </>
    )
}

export default CompletedList;