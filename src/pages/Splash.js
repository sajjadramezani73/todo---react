import notepad from '../assets/images/notepad.png'
import { useNavigate } from "react-router-dom";

const Splash = () => {

    const navigate = useNavigate()

    const navigateTodo = () => {
        navigate('todos')
    }


    return (
        <div className="h-full relative flex flex-col items-center justify-center splashPage">
            <div className="w-[235px] h-[235px] rounded-full flex justify-center items-center notepadImg">
                <img src={notepad} className="w-3/4" alt="" />
            </div>
            <div className='text-center px-10 mt-5'>
                <p className='text-4xl font-extrabold text-gray-800'>شروع لذت بخش تر با زندگی منظم</p>
            </div>
            <div className='text-center px-10 mt-5'>
                <p className='text-base font-medium text-gray-400'>برنامه ریزی، سازماندهی، پیگیری، در یک فضای بصری و مشارکتی</p>
            </div>
            <div className="flex justify-center mt-12">
                <button className='bg-blue rounded-lg text-white py-3 px-6 text-base'
                    onClick={navigateTodo}>شروع کنید</button>
            </div>
        </div>
    )
}

export default Splash