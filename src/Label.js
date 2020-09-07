import React from 'react'

const Label = ({label}) => {
    return (
        <div className="label">
            <p>{label}</p>
            <p className="btnPrompt">[Space]</p>
        </div>
    )
}

export default Label