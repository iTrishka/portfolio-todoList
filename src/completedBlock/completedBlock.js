import React from 'react';


import './completedBlock.css';

function CompletedBlock({onDeleteAll}){
    return (
        <div className='completedBlockcss'>
        <h2>Завершенные</h2>
        <div onClick={onDeleteAll} className="deleteAll">(очистить список)</div>
        </div>
    )
}

export default CompletedBlock;