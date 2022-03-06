import React from 'react'
import { useTodosState } from '../../context/TodosContext'
import NullPage from '../nullPage/NullPage'
import TodoItem from './components/TodoItem'

const Todo = ({ todoList }) => {

    const { todos } = useTodosState()

    console.log(todos)

    return (
        <div className='overflow-auto flex-1 pb-10 todoList'>
            <div className='h-full p-3 overflow-auto'>
                {todoList.length > 0 ? (
                    todoList.map(todo => {
                        return <TodoItem todo={todo} key={todo.id} />
                    })
                ) : (
                    <NullPage title="لیستی برای نمایش وجود ندارد" />
                )}
            </div>
        </div>
    )
}

export default Todo