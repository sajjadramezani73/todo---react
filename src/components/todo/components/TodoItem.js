import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, showIn, stagger, translateX } from '../../../util/constant';
import LoadSvgIcon from '../../../util/LoadSvgIcon';
import { deleteTodo, useTodosDispatch } from '../../../context/TodosContext';

const TodoItem = ({ todo }) => {

    const todoDispatch = useTodosDispatch()

    const [todoStatus, setTodoStatus] = useState('');
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (todo.status === 'success') {
            setTodoStatus('bg-blue')
        } else if (todo.status === 'warning') {
            setTodoStatus('bg-yellow')
        } else if (todo.status === "danger") {
            setTodoStatus('bg-red')
        }
    }, [todo])

    const deleteTodoHandler = (id) => {
        deleteTodo(todoDispatch, id)
    }

    return (
        <motion.div
            variants={fadeIn}
            className="relative"
        >
            <motion.div
                variants={translateX}
                animate={active ? 'animate' : 'initial'}
                className='py-2 px-3 h-20 bg-white rounded-xl mb-3 flex cursor-pointer relative z-10 clearHighLight'
                onClick={() => setActive(!active)}
            >
                <div className={`${todoStatus} w-1.5 h-full rounded-md`}></div>
                <div className='flex-1 pt-1 pr-2'>
                    <p className='text-base font-bold text-gray-600 leading-7 todoText'>{todo.text}</p>
                </div>
            </motion.div>
            <motion.div
                variants={stagger}
                animate={active ? 'animate' : 'initial'}
                className='absolute top-1/2 translate-y-[-50%] z-0 flex items-center w-1/4 justify-center'
            >
                <motion.p
                    variants={showIn}
                    className="bg-blue rounded-full w-7 h-7 flex justify-center items-center mx-0.5 xs:mx-1.5 cursor-pointer"
                >
                    <LoadSvgIcon name="edit" size={23} color="#ffffff" />
                </motion.p>
                <motion.p
                    onClick={() => deleteTodoHandler(todo.id)}
                    variants={showIn}
                    className="bg-red rounded-full w-7 h-7 flex justify-center items-center mx-0.5 xs:mx-1.5 cursor-pointer"
                >
                    <LoadSvgIcon name="close" size={11} color="#ffffff" />
                </motion.p>
            </motion.div>
        </motion.div>
    )
}

export default TodoItem