import {useState} from 'react'

function AddTask(props){
const {onAddTask} = props
const [task, setTask] = useState()

const changeTask = e => {
    setTask(e.target.value)
}

const addTask = () => {
onAddTask(task)
}

return (
    <div className="add-task-container">
<input type="text" onChange={changeTask} value={task} />
<button type="button" onClick={addTask}>Add Task</button>
    </div>
)
}

export default AddTask