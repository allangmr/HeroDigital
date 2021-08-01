import React from 'react'

function SelectForm({setEuresident, euResident, error}) {
    return (
        <div className="form-control custom-fc">
            <label htmlFor="euResident">EU RESIDENT*</label>
            <select className={`form-select form-select-lg mb-3 ${error}`} aria-label="Select Eu Resident" onChange={e => setEuresident(e.target.value)} value={euResident}>
                <option value="">- SELECT ONE -</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
    )
}

export default SelectForm
