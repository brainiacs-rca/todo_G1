import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

function Todo(props) {
  return (
    <div className='add-todo'>
        <input type='text' name='todo'  placeholder='Outline your todo' style={{width: '20rem', height: '90%', border: 'none'}} />
        <AiFillDelete onClick={props.removeTodo} />
    </div>
  )
}

export default Todo
