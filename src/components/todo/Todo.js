import { useTodosState } from '../../context/TodosContext'
import NullPage from '../nullPage/NullPage'
import TodoItem from './components/TodoItem'
import { motion } from 'framer-motion'
import { stagger } from '../../util/constant'

const Todo = () => {

    const { todos } = useTodosState()

    return (
        <div className='overflow-auto flex-1 pb-10 todoList'>
            <motion.div
                variants={stagger}
                initial="initial"
                animate="animate"
                className='h-full p-3 overflow-y-auto overflow-x-hidden'>
                {todos.length > 0 ? (
                    todos.map(todo => {
                        return <TodoItem todo={todo} key={todo.id} />
                    })
                ) : (
                    <NullPage title="لیستی برای نمایش وجود ندارد" />
                )}
            </motion.div>
        </div >
    )
}

export default Todo