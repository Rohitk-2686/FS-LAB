import React from "react";

const Todolist= () =>
{
    const tasks= [
        {id:101, text: 'Complete React assignment'},
        {id:102, text: 'Go for a run'},
        {id:103, text: 'Read a new article'}
    ];

    return(
        <ul>
            {tasks.map(task =>( 
                <li key={task.id}>{task.text}</li>))}
        </ul>
    );
};
export default Todolist;
