import React from 'react';
import PropTypes from 'prop-types';

function TodolistItem(props) {
    return (  
        <div>
            <b>{props.name} 
                <button onClick = { () => props.onShowTaskName (props.name)}>
                    Alert task name
                </button>
            </b>
        </div>
    )
}

TodolistItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    onShowTaskName: PropTypes.func
}

export default TodolistItem;