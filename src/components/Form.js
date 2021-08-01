import { useState} from 'react';
import '../assets/scss/Form.scss';
import ButtonsForm from './elements/ButtonsForm';
import CheckboxsForm from './elements/CheckboxsForm';
import ConfirmationMessage from './elements/ConfirmationMessage';
import InputsForm from './elements/InputsForm';
import SelectForm from './elements/SelectForm';
import Validation from './elements/Validation';

const Form = ({addSubsLog}) => {

    const [values, setValues] = useState("");

    //States Values
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [org, setOrg] = useState("");
    const [euResident, setEuresident] = useState("");
    const [advances, setAdvances] = useState(false);
    const [alerts, setAlerts] = useState(false);
    const [other, setOther] = useState(false);
    const [showConfirmation, setshowConfirmation] = useState("d-none");
    const [showError, setShowError] = useState("d-none");

    const [firstNameError, setfirstNameError] = useState("invisible")
    const [lastNameError, setlastNameError] = useState("invisible")
    const [emailError, setEmailError] = useState("invisible")
    const [euResidentError, seteuResidentError] = useState("invisible")
    const [checkError, setCheckError] = useState("invisible")

    const [firstNameInputError, setfirstNameInputError] = useState("green")
    const [lastNameInputError, setlastNameInputError] = useState("green")
    const [emailInputError, setemailInputError] = useState("green")
    const [euResidentSelectError, setEuResidentSelectError] = useState("green")

    //Validation Email
    const validateEmail = (emailFormat) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(emailFormat).toLowerCase());
    }
    //Validation Form Fields
    const validationForm = () =>{
        CleanErrors();
        if (firstName === "") {
            setfirstNameError('visible');
            setfirstNameInputError('red');
            return false;
        } 
        if (lastName === "") {
            setlastNameError('visible');
            setlastNameInputError('red');
            return false;
        } 
        if (email === "" || !validateEmail(email)) {
            setEmailError('visible');
            setemailInputError('red');
            return false;
        } 
        if (euResident === "") {
            seteuResidentError('visible');
            setEuResidentSelectError('red');
            return false;
        } 
        if(advances ===false && alerts ===false  && other ===false){
            setCheckError('visible');
            return false;
        }
        return true;
    }

    const saveFormData = () => {

        //Simulation Url Encode
        // var formBody = [];
        // for (var property in values) {
        //     var encodedKey = encodeURIComponent(property);
        //     var encodedValue = encodeURIComponent(values[property]);
        //     formBody.push(encodedKey + "=" + encodedValue);
        // }
        // formBody = formBody.join("&");


        //Simulation to send api
        // const responses = await fetch('/api/registration', {
        //   method: 'POST',
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        // },
        // body: formBody
        // });
        // http api response.
        const responseApi = 200;
        if (responseApi === 200) {
            const responses = { 
                    "status": "success", 
                    "message": "Thank you. You are now subscribed." 
            }    
            console.log(JSON.stringify(responses));
            return true;
        }
        else{
            const responses = { 
                "status": "error", 
                "message": "Invalid Subscription request." 
            }  
            //throw new Error(`Request failed`); 
            console.log(JSON.stringify(responses)); 
            throw new Error(`Request failed`); 
        }
      }


    // Event Submit
    const handleSubmit= (e) => {
        e.preventDefault();
        setshowConfirmation("d-none");
        setShowError("d-none");
        //Validations
        if(!validationForm()){
            console.log("validation errors")
        }else{
            //SendToAPI
            try {
                //SetValues form
                setValues({firstName:firstName, lastName:lastName, email:email,org:org, euResident:euResident, advances:advances, alerts:alerts, other:other })
                //Call to Api and Return
                saveFormData();
                //Clean Form
                handleReset();
                //ShowConfirmation
                setshowConfirmation("d-block");
            } catch (e) {
                console.log(e);
                //showError Message
                setShowError("d-block");
            }
            addSubsLog(values)
        }

    }
    //Reset Form
    const handleReset = () => {
        let value = "", check = false, confirm = "d-none";
        setFirstName(value);
        setLastName(value);
        setEmail(value);
        setOrg(value);
        setEuresident(value);
        setAdvances(check);
        setAlerts(check);
        setOther(check);
        setshowConfirmation(confirm);
        setShowError(confirm);
        CleanErrors();
    }
    //Clean Errors Messages
    const CleanErrors = () =>{
        setfirstNameError('invisible');
        setlastNameError('invisible'); 
        setEmailError('invisible');
        setCheckError('invisible');
        seteuResidentError('invisible');
        setfirstNameInputError('green');
        setlastNameInputError('green');
        setemailInputError('green');
        setEuResidentSelectError('green');
    }

    return (
        <>
            <div className="col-12 py-2">
                <form className="suscribe" onSubmit={e => {handleSubmit(e)}}>
                    <div className="row ">
                        <div className=" col-lg-6 col-md-12 col-sm-12">
                            <Validation view={firstNameError} message="First name is required" />
                            <InputsForm 
                                name="FIRST NAME*" 
                                get={firstName}  
                                set={setFirstName} 
                                htmlfor="firstName"
                                type="text" 
                                error = {firstNameInputError}
                            />
                        </div>
                        <div className=" col-lg-6 col-12 col-md-12 col-sm-12">
                            <Validation view={lastNameError} message="Last name is required" />
                            <InputsForm 
                                name="LAST NAME*" 
                                get={lastName}  
                                set={setLastName} 
                                htmlfor="lastName"
                                type="text" 
                                error = {lastNameInputError}
                            />
                        </div>
                    </div>
                    <div className="row pt-lg-3 pb-lg-2">
                        <div className=" col-lg-6 col-md-12 col-sm-12 ">
                            <Validation view={emailError}  message="Email address is required" />
                            <InputsForm 
                                name="EMAIL ADDRESS*" 
                                get={email}  
                                set={setEmail} 
                                htmlfor="email"
                                type="text" 
                                error={emailInputError}
                            />
                        </div>
                        <div className=" col-lg-6 col-12 col-md-12 col-sm-12">
                            <Validation view="invisible" message="Please provide valid Organization" />
                            <InputsForm 
                                name="ORGANIZATION" 
                                get={org}  
                                set={setOrg} 
                                htmlfor="org"
                                type="text" 
                            />
                        </div>
                    </div>
                    <div className="row  py-1">
                        <div className=" col-lg-3 col-md-12 col-sm-12">
                            <Validation view={euResidentError} message="Please choose one option"  />
                            <SelectForm setEuresident={setEuresident} euResident={euResident} error={euResidentSelectError}/>
                        </div>
                    </div>
                    <div className="row  py-4">
                        <Validation view={checkError} message="Please choose one or more options" />
                        <CheckboxsForm 
                            advances={advances} 
                            setAdvances={setAdvances}
                            alerts={alerts}
                            setAlerts={setAlerts}
                            other={other}
                            setOther={setOther}
                        />
                    </div>
                    <ButtonsForm handleReset={handleReset} />
                    <ConfirmationMessage 
                        showConfirmation={showConfirmation} 
                        setshowConfirmation={setshowConfirmation} 
                        showError={showError}
                        setShowError={setShowError}
                    />
                </form>
            </div>
        </>
    )
}

export default Form
