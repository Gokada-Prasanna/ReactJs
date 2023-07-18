import React, {useReducer} from 'react'
import AddTask from './AddTask'
import TasksList from './TasksList'

function UseReducer(){
    const [state, dispatch] = useReducer(tasksReducer, [])

    const handleAddTask = (text) => {
        dispatch({
            type:"add_task",
            id:state.length+1,
            taskName:text,
        });
    }

    const handleDeleteTask = (taskId) => {
        dispatch({
            type:"delete_task",
            id:taskId,
        })
    }

return (
    <>
    <AddTask onAddTask={handleAddTask}/>
    <ul>
        {state.map(task => (
            <TasksList taskDetails={task} onDeleteTask={handleDeleteTask}/>
        )
        )}
    </ul>
    </>

)
}

export default UseReducer


function tasksReducer(state, action){
    switch(action.type){
        case "add_task":
            return [...state, {id:action.id, taskName:action.taskName}]
        case "delete_task":
            return state.filter(task => 
task.id !== action.id
            )
        default:
            throw Error("Undefined Action:"+action.type)
    }
}