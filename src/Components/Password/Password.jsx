import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import style from '../Login/Login.module.css'
// import style from './Password.module.css'

export default function Password() {

    let [user, getUser] = useState({
        userEmail: '',
        password: '',
        verificationCode: ''
    })
    
    function checkData(eventInfo) {
        let myUser = {...user};
        myUser[eventInfo.target.name] = eventInfo.target.value
        getUser(myUser)
        console.log(myUser);
    }
    
    function submit(e) {
        e.preventDefault();
    }

    let [visible, setVisible] = useState(false)

    return (
        <section className={` ${style.loginSec}`} >

        <div className="container">
        
            <div className="row row-gap-5">
            
                <div className="col-lg-6 d-sm-none d-lg-block">
                
                    <div className={`${style.leftBox}`}>
                    
                        <h2 className={`${style.title}`}>Forget password</h2>
                    
                        <h4 className={`${style.subTitle}`}>New password</h4>
                    
                        <p className={`${style.disc}`}>"Stay updated with the latest news and updates."</p>
                    
                        <Link to='/service' className={`btn btn-success ${style.loginBtn}`}>Learn More</Link>
                    
                    </div>
                
                </div>
            
                <div className="col-lg-6">
                
                    <div className={`d-flex justify-content-center ${style.rightBox}`}>
                    
                    <form onSubmit={submit} className={`p-5 text-white ${style.form}`}>
                        
                            <Link to='/login' className={`text-decoration-none ${style.backToLogin}`}><i className="fa-solid fa-less-than me-2"></i>previous step</Link>
                        
                            <h3 className={`mt-3 ${style.title}`}>Reset your password</h3>
                        
                            <div className="mb-1">
                            
                                <label htmlFor="userEmail">Email</label>
                            
                                <div className={`d-flex align-items-center was-validated ${style.input}`}>
                                
                                    <i className="fa-solid fa-envelope"></i>
                                
                                    <input onChange={checkData} type="email" className='form-control py-2' placeholder='enter your email' name='userEmail' id='userEmail' required/>
                                
                                </div>
                            
                            </div>
                        
                            <div className="mb-1">
                            
                                <label htmlFor="verificationCode">Verification code</label>
                            
                                <div className={`d-flex align-items-center ${style.input}`}>
                                
                                    <input onChange={checkData} type="number" className={`form-control py-2 ${style.counter}`} placeholder='Verification code' name='verificationCode' id='verificationCode' required/>
                                
                                    <button className={`btn btn-light ${style.sendCheckValidation}`}>Send</button>
                                
                                </div>
                            
                            </div>
                        
                            <div className="mb-1">
                            
                                <label htmlFor="password">Password</label>
                            
                                <div className={`d-flex align-items-center was-validated ${style.input}`}>
                                
                                    <i onClick={()=> setVisible(!visible)} className={visible ? 'fa-solid fa-eye': 'fa-solid fa-eye-slash'}></i>
                                
                                    <input onChange={checkData} type={visible ? 'text': 'password'} className='form-control py-2' placeholder='enter your password' name='password' id='password' required/>
                                
                                </div>
                        
                            </div>
                        
                            <div className={`${style.signBtn}`}>
                            
                                <Link onClick={submit} to='' className={`btn btn-success ${style.loginBtn}`}>Reset password</Link>
                            
                                <p className='mt-3'>Don't have an account yet? <Link to='/register' className={`text-decoration-none ${style.signUpBtn}`}>Sign up</Link></p>
                            
                            </div>
                        
                            <div className={`${style.quickSign}`}>
                            
                                <Link to='' className={`${style.signWithGoogle}`}><i className="fa-brands fa-google"></i> Sign in with Google</Link>
                            
                            </div>
                        
                        </form>
                    
                    </div>
                
                </div>
            
            </div>
        
        </div>

    </section>
    )
}
