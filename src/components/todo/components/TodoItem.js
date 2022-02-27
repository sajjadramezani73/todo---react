import React, { useEffect, useState } from 'react'

const TodoItem = ({ todo }) => {

    const [todoStatus, setTodoStatus] = useState('');

    useEffect(() => {
        if (todo.status === 'success') {
            setTodoStatus('bg-blue')
        } else if (todo.status === 'warning') {
            setTodoStatus('bg-yellow')
        } else if (todo.status === "danger") {
            setTodoStatus('bg-red')
        }
    }, [todo])

    return (
        <div className='py-2 px-3 h-20 bg-white rounded-xl mb-3 flex cursor-pointer'>
            <div className={`${todoStatus} w-1.5 h-full rounded-md`}></div>
            <div className='flex-1 pt-1 pr-2'>
                <p className='text-base font-bold text-gray-600 leading-7 todoText'>{todo.text}</p>
            </div>
        </div>
    )
}

export default TodoItem