import React from 'react'
import { GrFormAdd } from 'react-icons/gr'

function Todo(props) {
  return (
    <div className='add-todo'>
        <b>Add Task</b>
        <GrFormAdd className='add' onClick={props.addTodo} />
    </div>
  )
}

export default Todo
