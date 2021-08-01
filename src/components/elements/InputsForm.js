import React from 'react'

function InputsForm({name, get, set, htmlfor, type, error}) {
    return (
        <div className="form-control custom-fc">
            <label htmlFor={htmlfor}>{name}</label>
            <input type={type} className={`${error} form-control input-lg`}
                value={get}  onChange={e => set(e.target.value)} />
        </div>
    )
}

export default InputsForm
