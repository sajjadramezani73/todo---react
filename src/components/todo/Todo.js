import React from 'react'
import TodoItem from './components/TodoItem'

const Todo = ({ todoList }) => {
    return (
        <div className='overflow-auto flex-1 pb-10 todoList'>
            <div className='h-full p-3 overflow-auto'>
                {todoList.map(todo => {
                    return <TodoItem todo={todo} key={todo.id} />
                })}
            </div>
        </div>
    )
}

export default Todo