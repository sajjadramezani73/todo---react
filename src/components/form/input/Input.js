import { useEffect, useState } from 'react'
import LoadSvgIcon from '../../../util/LoadSvgIcon'
import { Validating } from '../../../util/Validating';

const Input = ({ type, icon, size, label, onChange, rule, value }) => {

    const [valueInput, setValueInput] = useState('');
    const [inputFocus, setInputFocus] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setValueInput(value)
    }, [value])

    const onChangeHandler = (e) => {
        onChange(e.target.value)
        validator(e.target.value, rule)
    }

    const validator = (value, rule) => {
        if (rule) {
            const valid = Validating({ value: value, rule: rule })
            if (valid.err) {
                setError(valid.message)
            }
        } else {
            setError('')
        }
    }

    return (
        <div className={`${rule ? 'h-16' : ''} customInput`}>
            <div className={`flex justify-between items-center border rounded-2xl h-11 pl-2 relative 
            ${icon ? '' : 'pr-2'} 
            ${error !== '' ? 'border-red' : (inputFocus || !!valueInput) ? 'border-gray-700' : 'border-gray-300'}`}>
                {icon &&
                    <span className='w-9 flex justify-center items-center'>
                        <LoadSvgIcon name={icon} size={size} />
                    </span>
                }
                <input
                    type={type}
                    value={valueInput}
                    className="flex-1 outline-none text-sm"
                    onChange={onChangeHandler}
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                />
                <label className={`flb text-gray-500 font-bold ${icon ? '' : 'withoutIcon'} ${(inputFocus || valueInput !== '') ? 'active' : ''}`}>{label}</label>
            </div>
            {error !== '' && (
                <div className='flex items-center pr-2 pt-1'>
                    <p>
                        <LoadSvgIcon name="warningError" color='var(--red)' size="15" />
                    </p>
                    <p className='text-xs font-bold text-red'>{error}</p>
                </div>
            )}
        </div >
    )
}

export default Input