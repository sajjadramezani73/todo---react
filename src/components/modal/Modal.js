
const Modal = ({ children, options }) => {


    const { show, closeModal } = options;
    return (
        <div className={`fixed top-0 w-screen h-screen widthInherit ${show ? 'active' : ''} modal`}>
            <div className="overlay w-full h-full flex items-center justify-center px-4"
                onClick={(e) => e.target === e.currentTarget ? closeModal(false) : null}>
                <div className="bg-white p-4 rounded-lg w-full confirmPan">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal