import { useState } from 'react'
import './todoForm.modules.css'
import Button from '../UI/button'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <div className="todoForm">
      <form onSubmit={onSubmitHandler}>
        <h1>Todo App</h1>
        <input
          value={text}
          onChange={(ev) => setText(ev.target.value)}
          placeholder="Enter new todo"
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
