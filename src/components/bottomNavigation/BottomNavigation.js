import React from 'react'
import LoadIconSvg from '../../util/LoadSvgIcon'

const BottomNavigation = ({ clicked }) => {
    return (
        <div className='bg-blue h-10 relative bottomNavigation'>
            <div
                className="flex justify-center items-center absolute left-1/2 bottom-1/3 w-14 h-14 bg-blue rounded-full border-[6px] border-silver cursor-pointer clearHighLight btnPlus"
                onClick={clicked}>
                <LoadIconSvg name="plus" size="35" color='#ffffff' />
            </div>
            <div className="div"></div>
        </div>
    )
}

export default BottomNavigation