import LoadIconSvg from '../../../util/LoadSvgIcon'

const checkbox = ({ item, clicked }) => {

    const loadBackground = (status) => {
        switch (status) {
            case 'success':
                return 'bg-blue'
            case 'warning':
                return 'bg-yellow'
            case 'danger':
                return 'bg-red'
            default:
                break;
        }
    }

    return (
        <div className={`flex justify-center items-center w-9 h-9 border-[3px] shadow-[0_0px_2px_0px_rgba(0,0,0,0.8)] rounded-full ml-2
            ${loadBackground(item.status)} ${item.showStatus ? 'border-gray-700' : 'border-white'}`}
            onClick={clicked}
        >
            {item.showStatus ? <LoadIconSvg name="check" weight={1.5} color="#ffffff" /> : null}
        </div>
    )
}

export default checkbox