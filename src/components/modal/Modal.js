import { showIn, translateY } from "../../util/constant";
import { motion } from 'framer-motion'

const Modal = ({ children, options }) => {

    const { show, closeModal } = options;

    return (
        <div className={`fixed top-0 w-screen h-full z-50 widthInherit ${show ? 'active' : ''} modal`}>
            <motion.div className="overlay w-full h-full flex items-end justify-center"
                variants={showIn}
                animate={show ? 'animate' : 'initial'}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.target === e.currentTarget ? closeModal(false) : null}>
                <motion.div className={`bg-white p-4 rounded-t-lg w-full confirmPan`}
                    variants={translateY}
                    animate={show ? 'animate' : 'initial'}
                >
                    {children}
                </motion.div>
            </motion.div>
        </div >
    )
}

export default Modal