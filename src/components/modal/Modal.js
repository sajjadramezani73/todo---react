
const Modal = ({ children, options }) => {

    const { show, closeModal } = options;


    return (
        <div className={`fixed top-0 w-screen h-full widthInherit ${show ? 'active' : ''} modal`}>
            <div className="overlay w-full h-full flex items-end justify-center"
                onClick={(e) => e.target === e.currentTarget ? closeModal(false) : null}>
                <div className={`bg-white p-4 rounded-t-lg w-full confirmPan ${show ? 'active' : ''}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal