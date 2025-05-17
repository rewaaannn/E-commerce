import React , {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import style from '../Login/Login.module.css'
import PasswordChecklist from "react-password-checklist";

const UserDetails = ( {nextStep, handleChange, values} ) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    
    // const storedData = JSON.parse(localStorage.getItem('userData')) || [];
    
    const storedData = {...values} || []
    
    const data = []
    
    if (storedData !== null) {
        data.push({...storedData})
    }
    
    const [userData, setUserData] = useState(storedData)
    
    useEffect( () => {
    
        localStorage.setItem('userData', JSON.stringify([data]))
    
    })
    
    
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)

    
    //  user name
    // const [name, setName] = useState('')
    const [userErrorMessage, setUserErrorMessage] = useState('')
    const [validUserName, setValidUserName] = useState(false)
    // values.userName = name
    function validateUserName(event) {
        let new_user = event.target.value;
        // setName(new_user);
        if (new_user.length < 2) {
            setUserErrorMessage("user name length should be more than 2");
            setValidUserName('is-invalid')
            setCheck1(false)
        } else {
            setCheck1(true)
            setUserErrorMessage("");
            setValidUserName('is-valid')
        }
    }
    
    function handleUserName(event) {
        validateUserName(event)
        handleChange('userName')
    }
    
    // email
    // let [Email, setEmail] = useState('')
    // values.userEmail = Email
    let [validateEmailInput, setValidateEmailInput] = useState(false)
    const [message, setMessage] = useState(" ");
    
    function validateEmail(event) {
        let inputValue = event.target.value;
        // setEmail(inputValue);
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (!emailRegex.test(inputValue)) {
            setMessage("Error! you have entered invalid email.");
            setValidateEmailInput('is-invalid')
            setCheck2(false)
        } else {
            setCheck2(true)
            setMessage("");
            setValidateEmailInput("is-valid")
        }
    }
    function handleEmail (event) {
        handleChange('userEmail')
        validateEmail(event)
    }
    
    // password
    let [visible, setVisible] = useState(false)
    const [checkPassword, setCheckPassword] = useState(false)
    // const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [validatePasswordInput, setValidatePasswordInput] = useState('')
    
    
    
    // values.userPassword = password
    function validatePassword(event) {
        let new_pass = event.target.value;
        // setPassword(new_pass);
        if ( new_pass.length > 0 ) {
            setCheckPassword(true)
        } else {
            setCheckPassword(false)
        }
        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;
        if (!new_pass.match(lowerCase)) {
            setErrorMessage("Password should contains lowercase letters!");
            setValidatePasswordInput('is-invalid')
            setCheck3(false)
        } else if (!new_pass.match(upperCase)) {
            setErrorMessage("Password should contain uppercase letters!");
            setValidatePasswordInput('is-invalid')
            setCheck3(false)
        } else if (!new_pass.match(numbers)) {
            setErrorMessage("Password should contains numbers also!");
            setValidatePasswordInput('is-invalid')
            setCheck3(false)
        } else if (new_pass.length < 10) {
            setErrorMessage("Password length should be more than 10.");
            setValidatePasswordInput('is-invalid')
            setCheck3(false)
        } else {
            setCheck3(true)
            setErrorMessage("");
            setValidatePasswordInput('is-valid')
        }
    }
    
    function handlePassword (event) {
        handleChange('userPassword')
        validatePassword(event)
    }
    
    
    // confirm password
    let [visible2, setVisible2] = useState(false)
    // const [matchPassword, setMatchPassword] = useState("");
    const [errorMatchPasswordMessage, setErrorMatchPasswordMessage] = useState("");
    const [validateMatchPasswordInput, setValidateMatchPasswordInput] = useState('')
    // values.confirmPassword = matchPassword
    function validateMatchPassword(event) {
        let new_pass = event.target.value;
        // setMatchPassword(new_pass);

        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;
        if (!new_pass.match(lowerCase)) {
            setErrorMatchPasswordMessage("Password should contains lowercase letters!");
            setValidateMatchPasswordInput('is-invalid')
            setCheck4(false)
        } else if (!new_pass.match(upperCase)) {
            setErrorMatchPasswordMessage("Password should contain uppercase letters!");
            setValidateMatchPasswordInput('is-invalid')
            setCheck4(false)
        } else if (!new_pass.match(numbers)) {
            setErrorMatchPasswordMessage("Password should contains numbers also!");
            setValidateMatchPasswordInput('is-invalid')
            setCheck4(false)
        } else if (new_pass.length < 10) {
            setErrorMatchPasswordMessage("Password length should be more than 10.");
            setValidateMatchPasswordInput('is-invalid')
            setCheck4(false)
        } else {
            setCheck4(true)
            setErrorMatchPasswordMessage("");
            setValidateMatchPasswordInput('is-valid')
        }
    }
    
    function handleMatchPassword (event) {
        handleChange('userEmail')
        validateMatchPassword(event)
    }
    
    const [errorInput, setErrorInput] = useState(false)
    
    function checkValues(e) {
    
        if( !check2 || !check3 || !check4) {
            setErrorInput(false)
        } else {
            setErrorInput(true)
            e.preventDefault();
            nextStep();
        }
    
    }
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
        
    // Handle form submission

        
    return (
        <div>
        
            <div className="position-relative m-4">
                <div className="progress" style={{height: `1rem`}}>
                    <div className="progress-bar bg-light" style={{width: `50%`}} > </div>
                </div>
                <h3 className="position-absolute top-50 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: `fit`, height:`2rem`}} >1</h3>
                <h3 className="position-absolute top-50 start-50 translate-middle btn btn-sm btn-secondary rounded-pill" style={{width: `fit`, height:`2rem`}}>2</h3>
                <h3 className="position-absolute top-50 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style={{width: `fit`, height:`2rem`}}>3</h3>
            </div>
        
            <div className="mb-1">
            
                <label htmlFor="userName">User name</label>
            
                <div className={`d-flex align-items-center ${validUserName} ${style.input}`}>
                
                    <i className="fa-solid fa-user"></i>
                
                    <input onChange={handleChange('userName')} type="text" className={`form-control py-2 ${validUserName}`} placeholder='enter your name' name='userName' id='userName' value={values.userName} required/>
                
                </div>
        
                <div style={{color: 'red'}}>{userErrorMessage}</div>
        
            </div>
        
            <div className="mb-1">
            
                <label htmlFor="userEmail">Email</label>
            
                <div className={`d-flex align-items-center ${validateEmailInput} ${style.input}`}>
                
                    <i className="fa-solid fa-envelope"></i>
                
                    <input onChange={handleChange("userEmail")} type="email" className={`form-control py-2 ${validateEmailInput}`} placeholder='enter your email' name='userEmail' id='userEmail' value={values.userEmail} required/>
                
                </div>
            
                <div style = {{ color: "red" }}> {message} </div>
            
            </div>
        
            <div className="mb-1">
            
                <label htmlFor="userPassword">Password</label>
            
                <div className={`d-flex align-items-center ${validatePasswordInput} ${style.input}`}>
                
                    <i onClick={()=> setVisible(!visible)} className={`cursor-pointer ${visible ? 'fa-solid fa-eye': 'fa-solid fa-eye-slash'}`}></i>
                
                    <input onChange={handleChange('userPassword')} type={visible ? 'text': 'password'} className={`form-control py-2 ${validatePasswordInput}`} placeholder='enter your password' value={values.userPassword} name='userPassword' id='userPassword' required/>
                
                </div>
        
                <div style = {{ color: "red" }}> {errorMessage} </div>
        
            </div>
        
            <div className="mb-1">
            
                <label htmlFor="password">Confirm Password</label>
            
                <div className={`d-flex align-items-center ${validateMatchPasswordInput} ${style.input}`}>
                
                    <i onClick={()=> setVisible2(!visible2)} className={`cursor-pointer ${visible2 ? 'fa-solid fa-eye': 'fa-solid fa-eye-slash'}`}></i>
                
                    <input onChange={handleChange('confirmPassword')} type={visible2 ? 'text': 'password'} className={`form-control py-2 ${validateMatchPasswordInput}`} placeholder='confirm your password' value={values.confirmPassword} name='password' id='password' required/>
                
                </div>
        
                <div style = {{ color: "red" }}> {errorMatchPasswordMessage} </div>
        
            </div>
        
            {/* { checkPassword ? <PasswordChecklist
                rules={["capital", "match", "specialChar", "minLength", "number"]}
                minLength={8}
                value={password}
                valueAgain={matchPassword}
                /> : '' } */}
        
            <div className={`${style.signBtn}`}>
            
                <button onClick={Continue} className={`btn btn-success ${style.loginBtn}`}>Next</button>
            
                <div>
                
                    {/* {!errorInput ? 
                        <ul className={` ${style.error}`}> 
                    
                        <li><p>user name length should be more than 2.</p></li>
                    
                        <li><p>you have enter valid email.</p></li>
                    
                        <li><p>Password should contains lowercase letters!.</p></li>
                    
                        <li><p>Password should contain uppercase letters!.</p></li>
                    
                        <li><p>Password should contains numbers also!.</p></li>
                    
                        <li><p>Password length should be more than 10.</p></li>
                    
                    </ul> : ''} */}
                
                </div>
            
                <p className='mt-3'>Already have an account? <Link to='/login' className={`text-decoration-none ${style.signUpBtn}`}>Sign in</Link></p>
            
            </div>
        
            <div className={`${style.quickSign}`}>
            
                <Link to='' className={`${style.signWithGoogle}`}><i className="fa-brands fa-google"></i> Sign in with Google</Link>
            
            </div>
        
            <div className={`${style.extraSign}`}>
                
                <h5>Get the app</h5>
            
                <div className={`d-flex justify-content-between align-items-center flex-wrap text-align-center mt-3 ${style.androidAndIos}`}>
                
                    <Link to="" tabIndex="0"><img className="bn46 mb-2" width={150} height={50} src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"alt="bn45"/></Link>
                
                    <Link to="" tabIndex="0"><img className="bn45" width={170} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45"/></Link>
                
                </div>
            
            </div>
        
        </div>
    )
}

export default UserDetails
