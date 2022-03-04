import Todos from '../../pages/Todos'
import { Routes, Route } from "react-router-dom";
import Splash from '../../pages/Splash';

const Layout = () => {
    return (
        <div className='max-w-xl shadow-lg shadow-gray-400 mx-auto h-full bg-silver'>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="todos" element={<Todos />} />
            </Routes>
        </div>
    )
}

export default Layout 