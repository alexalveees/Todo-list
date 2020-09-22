import React, { Component } from 'react';
import TodolistItem from './TodolistItem';

class Todolist extends Component {
    state = {
        taskItens: [
            {
                id:1,
                name: 'Task 1',
                status: 'pendig',
            },
            {
                id:2,
                name: 'Task 2',
                status: 'pendig',
            },
            {
                id:3,
                name: 'Task 3',
                status: 'pendig',
            }
        ]
    } 
    render(){
        const handleOnToggleCompleted = (taskId, event) => {
            this.setState ({ 
                taskItens: this.state.taskItens.map(task => {
                    if (task.id === taskId) {
                        return {...task, status: event.target.checked ? 'completed' : 'pendig'}
                    }
                    return task;
                })
            })

        console.log(this.state.taskItens);
        } 
        return (
            <ul>
                {this.state.taskItens.map(task => (
                    <li>
                        <TodolistItem onToggleCompleted = {handleOnToggleCompleted} {...task} /> 
                    </li>
                ))}
            </ul>
        )
    }
}

export default Todolist;