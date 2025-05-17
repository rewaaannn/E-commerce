import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import style from './Login.module.css'
import axios from 'axios';

export default function Login() {

    let userData;

    if(window.localStorage.getItem("data") == null) {
        userData = [];
    } else {
        userData = JSON.parse(window.localStorage.getItem("data"));
    }

    let navigate = useNavigate();
    
    // let [error, setError] = useState(false)
    
    // function submit(e) {
    //     e.preventDefault();
    // }

    // let [visible, setVisible] = useState(false)
//////////////////////////////////////////////////////////////////////
    // const [errors, setErrors] = useState({});
    // const [submitted2, setsubmitted2] = useState(false);

    // function validateForm() {
    //     let isValid = true;
    //     const newErrors = {};

    // // Validate email
    //     if (!user.userEmail) {
    //         newErrors.userEmail = "Email is required";
    //         isValid = false;
    //     }
    
    //     // Validate password
    //     if (!user.password) {
    //         newErrors.password = "Password is required";
    //         isValid = false;
    //     }
    
    //     setErrors(newErrors);
    //     return isValid;
    // };

    // function handleSubmit(e) {
    //     e.preventDefault();
    
    //     if (validateForm()) {
    //         // Form is valid, you can submit or process the data here
    //         console.log("Form data:", user);
    //         setsubmitted2(true); // Set a submitted2 flag
    //         checkData();
    //     } else {
    //     // Form is not valid, display error message2s
    //     }
    // };

    // const isFormValid = Object.keys(errors).length === 0;

    let [Email, setEmail] = useState('')
    // values.userEmail = Email
    let [validateEmailInput, setValidateEmailInput] = useState('')
    const [message2, setmessage2] = useState(" ");
    const [check2, setCheck2] = useState(false)
    
    function validateEmail(event) {
        let inputValue = event.target.value;
        setEmail(inputValue);
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (!emailRegex.test(inputValue)) {
            setmessage2("Error! you have entered invalid email.");
            setValidateEmailInput('is-invalid')
            setCheck2(false)
        } else {
            setCheck2(true)
            setmessage2("");
            setValidateEmailInput("is-valid")
        }
    }
    function handleEmail (event) {
        // confirmData(event)
        validateEmail(event)
    }

    let [visible, setVisible] = useState(false)
    const [checkPassword, setCheckPassword] = useState(false)
    const [password2, setPassword2] = useState("");
    const [errormessage2, setErrormessage2] = useState("");
    const [validatePasswordInput, setValidatePasswordInput] = useState('')
    
    const [check3, setCheck3] = useState(false)
    
    
    // values.userPassword = password
    function validatePassword(event) {
        let new_pass = event.target.value;
        setPassword2(new_pass);
        if ( new_pass.length > 0 ) {
            setCheckPassword(true)
        } else {
            setCheckPassword(false)
        }
        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;
        if (!new_pass.match(lowerCase)) {
            setErrormessage2("Password should contains lowercase letters!");
            setValidatePasswordInput('is-invalid')
            setCheck3(false)
        } else if (!new_pass.match(upperCase)) {
            setErrormessage2("Password should contain uppercase letters!");
            setValidatePasswordInput('is-invalid')
            setCheck3(false)
        } else if (!new_pass.match(numbers)) {
            setErrormessage2("Password should contains numbers also!");
            setValidatePasswordInput('is-invalid')
            setCheck3(false)
        } else if (new_pass.length < 10) {
            setErrormessage2("Password length should be more than 10.");
            setValidatePasswordInput('is-invalid')
            setCheck3(false)
        } else {
            setCheck3(true)
            setErrormessage2("");
            setValidatePasswordInput('is-valid')
        }
    }
    
    function handlePassword (event) {
        // handleChange('userPassword')
        validatePassword(event)
    }

    const [errorInput, setErrorInput] = useState(false)
    
    function checkValues(e) {
    
        if( !check2 || !check3) {
            setErrorInput(false)
        } else {
            setErrorInput(true)
            e.preventDefault();
            // nextStep();
        }
    
    }

    const [email, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Send a POST request to your backend API
            const response = await axios.post('https://cleananode-production.up.railway.app/api/auth/login', {
                email,
                password
            });

            // Assuming your API responds with a JSON object containing a status and message
            if (response.data.status === 'success') {
                alert('Login successful!'); // Replace with your success logic (e.g., redirect)
                window.localStorage.setItem('isLoggedIn', true)
                // const result = await response.json();
                window.localStorage.setItem("data", JSON.stringify(response.data));
                navigate('/')
                window.location.reload();
            } else {
                setError(response.data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={`px-3 ${style.loginSec}`} >

        <div className="container">
        
            <div className="row row-gap-5 justify-content-center align-items-center">
            
                <div className="col-lg-6 d-sm-none d-lg-block">
                
                    <div className={`${style.leftBox}`}>
                    
                        <h2 className={`${style.title}`}>Login</h2>
                    
                        <h4 className={`${style.subTitle}`}>Sign in to continue</h4>
                    
                        <p className={`${style.disc}`}>"Enjoy a personalized experience tailored to your preferences."</p>
                    
                        <Link to='/service' className={`btn btn-success ${style.loginBtn}`}>Learn More</Link>
                    
                    </div>
                
                </div>
            
                <div className="col-lg-6">
                
                    <div className={`d-flex justify-content-center position-relative ${style.rightBox}`}>
                    
                    {/* {submitted ? (
                        <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center -justify-content-center success-message2">Login successful!</div>
                    ) : ( */}
                    
                    <form onSubmit={handleSubmit} className={`px-5 py-5 text-white ${style.form}`} >
                            
                            <h3 className={`${style.title}`}>Sign in</h3>
                        
                            <div className="mb-1">
                            
                                <label htmlFor="email">Email</label>
                
                                <div className={`d-flex align-items-center ${validateEmailInput} ${style.input}`}>
                                
                                    <i className="fa-solid fa-envelope"></i>
                                
                                    <input type="email" value={email} onChange={(e) => setUserEmail(e.target.value)} className={`form-control py-2 ${validateEmailInput}`} placeholder='enter your email' name='email' id='email' required/>
                                
                                </div>
                            
                                <div style = {{ color: "red" }}> {message2} </div>
                            
                            </div>
                        
                            <div className="mb-1">
                            
                                <label htmlFor="password">Password</label>
            
                                <div className={`d-flex align-items-center ${validatePasswordInput} ${style.input}`}>
                                
                                    <i onClick={()=> setVisible(!visible)} className={`cursor-pointer ${visible ? 'fa-solid fa-eye': 'fa-solid fa-eye-slash'}`}></i>
                                
                                    <input type={visible ? 'text': 'password'} value={password} onChange={(e) => setUserPassword(e.target.value)} className={`form-control py-2 ${validatePasswordInput}`} placeholder='enter your password' name='password' id='password' required/>
                                
                                </div>
                        
                                <div style = {{ color: "red" }}> {errormessage2} </div>
                            
                            </div>
                        
                            <div className={`d-flex justify-content-between align-items-center ${style.extraLinks}`}>
                            
                                <div className={`${style.rememberMe}`}>
                                
                                    <input type="checkbox" name='rememberMe' id='rememberMe' />
                                
                                    <label htmlFor="rememberMe">remember me</label>
                                
                                </div>
                            
                                <div className={`${style.forgetPassword}`}>
                                
                                    <Link to='/password' className={`text-decoration-none ${style.forgetBtn}`} >Forget password?</Link>
                                
                                </div>
                            
                            </div>
                        
                            <div className={`${style.signBtn}`}>
                            
                                <button type='submit' disabled={loading} className={`btn btn-success ${style.loginBtn}`}>{loading ? 'Logging in...' : 'Login'}</button>
                            
                                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                            
                                <p className='mt-3'>Don't have an account yet? <Link to='/register' className={`text-decoration-none ${style.signUpBtn}`}>Sign up</Link></p>
                            
                            </div>
                        
                            {/* {error?<p style={{color:"red"}}>Enter valid Email or password</p>:''} */}
                        
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
                        
                        </form>
                        {/* )
                    } */}
                    
                    </div>
                
                </div>
            
            </div>
        
        </div>

    </section>
    )
}
