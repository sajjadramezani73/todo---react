import { useEffect, useState } from 'react'
import BottomNavigation from '../components/bottomNavigation/BottomNavigation'
import Checkbox from '../components/form/checkbox/Checkbox';
import Input from '../components/form/input/Input';
import Modal from '../components/modal/Modal';
import Todo from '../components/todo/Todo'
import { v4 as uuidv4 } from 'uuid';
import { setTodoLists, useTodosDispatch } from '../context/TodosContext';

const Todos = () => {

    const todoDispatch = useTodosDispatch()

    const [showModal, setShowModal] = useState(false);
    const [activeStatus, setActiveStatus] = useState(0);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [statusTodo] = useState([
        { id: 1, status: 'success', title: 'انجام شده' },
        { id: 2, status: 'warning', title: 'در حال انجام' },
        { id: 3, status: 'danger', title: 'مهم' }
    ]);
    const [todo, setTodo] = useState({
        text: '',
        status: ''
    });

    const checkboxHandler = (item) => {
        setActiveStatus(item.id)
        setTodo({ ...todo, status: item.status })
    }

    useEffect(() => {
        (todo.text === '' || todo.status === '') ? setBtnDisabled(true) : setBtnDisabled(false)
    }, [todo])

    const saveTodo = () => {
        setTodoLists(todoDispatch, { id: uuidv4(), text: todo.text, status: todo.status })
        setShowModal(false)
        setTodo({ text: '', status: '' })
        setActiveStatus(0)
    }

    return (
        <div className='h-full flex flex-col justify-between widthInherit'>
            <Todo />
            <BottomNavigation clicked={() => setShowModal(true)} />

            <Modal options={{
                show: showModal,
                closeModal: (value) => setShowModal(value)
            }} >
                <div className="flex items-center justify-evenly">
                    {statusTodo.map(item => {
                        const showStatus = item.id === activeStatus ? 'showStatus' : ''
                        return <Checkbox
                            key={item.id}
                            showStatus={showStatus}
                            item={{ ...item, showStatus }}
                            clicked={() => checkboxHandler(item)}
                        />
                    })}
                </div>
                <div className="py-6">
                    <Input
                        type="text"
                        icon="bar"
                        size="20"
                        label="متن خود را وارد کنید"
                        value={todo.text}
                        onChange={(value) => setTodo({ ...todo, text: value })}
                    />
                </div>
                <div className='flex justify-center'>
                    <button
                        className={`bg-blue rounded text-white text-sm px-4 py-2 cursor-pointer ${btnDisabled ? 'opacity-70' : ''}`}
                        disabled={btnDisabled}
                        onClick={saveTodo}
                    >ارسال</button>
                </div>
            </Modal>
        </div>
    )
}

export default Todos