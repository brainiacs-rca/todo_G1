import React, { useState } from 'react';
import { GiShinyApple } from 'react-icons/gi'
import Todo from './Todo'
import Otodo from './Otodo'

export default function Card () {
    const [todos, setTodo] = useState([])

    const addTodo = () =>{
        const newTodo = <Otodo />
        setTodo(()=>{
            return [...todos, newTodo]
        })
    }

    const removeTodo = (id) =>{
        setTodo(()=>{
            return todos.filter((todo, index)=>{
                return todo.id !== id
            })
        })
    }

    const todoList = todos.map((todo, index)=>{
        return <Otodo key={index} value={todo} id={index} />
    })

    return (
        <div className='todo-container '>
            <div className='logo-container'>
                <div className='logoc'>
                    <GiShinyApple className='logo' />
                </div>
                <h1>Todo List</h1>
            </div>
            <Todo addTodo={()=>addTodo()} removeTodo={removeTodo} />
            {/* Dynamic data */}
            {todoList}
        </div>
    )
}