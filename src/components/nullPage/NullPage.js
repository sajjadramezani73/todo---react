import LoadSvgIcon from "../../util/LoadSvgIcon"

const NullPage = ({ title }) => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <LoadSvgIcon name='nullList' size="60" />
            <span className="pt-4 text-gray-500 text-sm">{title}</span>
        </div>
    )
}

export default NullPage