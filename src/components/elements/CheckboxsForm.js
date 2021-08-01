function CheckboxsForm({advances, setAdvances, alerts, setAlerts, other, setOther}) {
    return (
        <div className="row py-3">
            <div className=" col-lg-6 col-md-12 col-sm-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={advances} checked={advances} onChange={e => setAdvances(e.target.checked)} />
                    <label className="form-check-label" htmlFor="advances" >ADVANCES</label>
                </div>
            </div>
            <div className=" col-lg-6 col-md-12 col-sm-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={alerts}  checked={alerts} onChange={e => setAlerts(e.target.checked)} />
                    <label className="form-check-label" htmlFor="alerts" >ALERTS</label>
                </div>
            </div>
            <div className=" col-lg-12 col-md-12 col-sm-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={other} checked={other}  onChange={e => setOther(e.target.checked)} />
                    <label className="form-check-label" htmlFor="other" >OTHER COMMUNICATIONS</label>
                </div>
            </div>
        </div>
    )
}

export default CheckboxsForm
