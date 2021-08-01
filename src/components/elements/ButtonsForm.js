function ButtonsForm({handleReset}) {
    return (
        <div className="row py-5">
            <div className=" col-lg-2 col-md-12 col-sm-12 form-button pb-3">
                <button type="submit" className="btn btn-primary submit">SUBMIT</button>
            </div>
            <div className=" col-lg-2 col-md-12 col-sm-12 form-button  pb-3">
                <button type="reset" className="btn btn-primary reset" onClick={handleReset}>RESET</button>
            </div>
        </div>
    )
}

export default ButtonsForm
