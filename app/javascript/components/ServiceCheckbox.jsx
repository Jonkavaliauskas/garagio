import React, { useState } from 'react'

const ServiceCheckbox = ({ text, state, updateState }) => {

    const [textColor, setTextColor] = useState('#000000');
    const [isChecked, setChecked] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();

        // console.log('clicked label');
        setTextColor(textColor === '#000000' ? '#0D3DE5' : '#000000');
        setChecked(textColor === '#000000' ? true : false);
        updateState(state, text);
    }

    return (
        <>
            <label htmlFor={text} className='serviceCheckbox' onClick={handleClick} style={{
                color: textColor
            }}>
                <input type="checkbox" className="hidden" name={text} id={text} checked={isChecked} onChange={setChecked}/>
                {text}
            </label>
        </>
    )
}

export default ServiceCheckbox
