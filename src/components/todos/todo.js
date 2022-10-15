import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import './todo.modules.css'

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className={`${'todo'} ${todo.isCompleted ? 'completedTodo' : ''}`}>
      <RiTodoFill className="todoIcon" />
      <div className="todoText">{todo.text}</div>
      <RiDeleteBin2Line
        className="deleteIcon"
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck className="checkIcon" onClick={() => toggleTodo(todo.id)} />
    </div>
  )
}

export default Todo
