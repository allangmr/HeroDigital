import React from 'react'

function Validation({message, view}) {
    return (
        <div className="error-validation ">
            <div className={view}><em>{message}</em></div>
        </div>
    )
}

export default Validation
