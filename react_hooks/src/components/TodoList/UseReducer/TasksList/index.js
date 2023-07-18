
const TasksList = (props) => {
const {taskDetails, onDeleteTask} = props
const {id,taskName} = taskDetails

const onClickDelete = () => {
    onDeleteTask(id)
}
return (

    <li key={id}>
        <p>{taskName}</p>
        <button type="button" onClick={onClickDelete}>Delete</button>
    </li>
)
}

export default TasksList