function ConfirmationMessage({showConfirmation, setshowConfirmation,showError, setShowError }) {
    return (
        <div className="row">
        <div className={showConfirmation}>
            <div className="alert alert-success" role="alert">
                <div className="col text-end">
                    <button type="button" className="btn-close" onClick={e => setshowConfirmation("d-none")} data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <h4 className="alert-heading">Well done!</h4>
                <p>Aww yeah, you successfully are subscribed.</p>
            </div>
        </div>
        <div className={showError}>
            <div className="alert alert-danger" role="alert">
                <div className="col text-end">
                    <button type="button" className="btn-close" onClick={e => setShowError("d-none")} data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <h4 className="alert-heading">Problems with Server Connection!</h4>
                <p>Please, try again.</p>
            </div>
        </div>
    </div>
    )
}

export default ConfirmationMessage
