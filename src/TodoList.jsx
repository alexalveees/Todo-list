import React from 'react';
import TodolistItem from './TodolistItem';

function Todolist() {
    const taskItens = [
        {
            id:1,
            name: 'Task 1',
            status: 'pendig',
        },
        {
            id:1,
            name: 'Task 2',
            status: 'pendig',
        },
        {
            id:1,
            name: 'Task 3',
            status: 'pendig',
        }

    ]

const handleShowTaskName = (taskName) => alert (`Voce Clicou em: ${taskName}`)
        
    return (
        <ul>
            {taskItens.map(task => (
                <li>
                    <TodolistItem onShowTaskName = {handleShowTaskName} {...task} /> 
                </li>
            ) )}
        </ul>

        
    )
}

export default Todolist;