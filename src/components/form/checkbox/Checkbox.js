import React from 'react'
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
        <div className={`flex items-center cursor-pointer clearHighLight checkboxItem ${item.showStatus ? 'active' : ''}`} onClick={clicked}>
            <span className={`flex justify-center items-center w-5 h-5 border border-gray-300 rounded 
            ${item.showStatus ? loadBackground(item.status) : null}`}>
                <LoadIconSvg name="check" weight={1.5} color="#ffffff" />
            </span>
            <p className={`text-xs font-bold mr-1 ${item.showStatus ? 'text-gray-800' : 'text-gray-600'}`}>{item.title}</p>
        </div>
    )
}

export default checkbox