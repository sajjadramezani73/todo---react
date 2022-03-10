import LoadIconSvg from '../../util/LoadSvgIcon'

const BottomNavigation = ({ clicked }) => {
    return (
        <div className='bg-blue h-14 relative bottomNavigation'>
            <div
                className="flex justify-center items-center absolute left-1/2 bottom-1/2 w-14 h-14 bg-blue rounded-full border-8 border-silver cursor-pointer clearHighLight btnPlus"
                onClick={clicked}>
                <LoadIconSvg name="plus" size="35" color='#ffffff' />
            </div>
        </div>
    )
}

export default BottomNavigation