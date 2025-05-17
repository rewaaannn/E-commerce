import React, { useState } from 'react'
import style from '../Login/Login.module.css'

const CompanyContact = ({nextStep, prevStep, handleChange, values}) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    
    
    // company email
    let [Email, setEmail] = useState('')
    values.email = Email
    let [validateEmailInput, setValidateEmailInput] = useState(false)
    const [message, setMessage] = useState(" ");
    
    function validateEmail(event) {
        let inputValue = event.target.value;
        setEmail(inputValue);
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (!emailRegex.test(inputValue)) {
            setMessage("Error! you have entered invalid email.");
            setValidateEmailInput('is-invalid')
        } else {
            setMessage("");
            setValidateEmailInput("is-valid")
        }
    }
    function handleEmail (event) {
        handleChange('email')
        validateEmail(event)
    }
    
    
    
    return (
        <form >
        
            {/* <h3 className={`text-center mb-4 ${style.formTitle}`}><i className="fa-solid fa-address-card"></i> Contact Information</h3> */}
        
            <div className="position-relative m-4">
                <div className="progress bg-primary" style={{height: `1rem`}}>
                    <div className="progress-bar" style={{width: `50%`}} > </div>
                </div>
                <h3 className="position-absolute top-50 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: `fit`, height:`2rem`}} >1</h3>
                <h3 className="position-absolute top-50 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: `fit`, height:`2rem`}}>2</h3>
                <h3 className="position-absolute top-50 start-100 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: `fit`, height:`2rem`}}>3</h3>
            </div>
        
            <div className="mb-1">
                
                <label htmlFor="phone">Phone</label>
                
                <div className={`d-flex align-items-center was-validated ${style.input}`}>
                
                    <i className="fa-solid fa-phone"></i>
                
                    <input onChange={handleChange('phone')} type="text" className='form-control py-2' placeholder='phone number' name='phone' id='phone' value={values.phone} required/>
                
                </div>
                
            </div>
            
            <div className="mb-1">
            
                <label htmlFor="email">Email</label>
                
                <div className={`d-flex align-items-center ${validateEmailInput} ${style.input}`}>
                
                    <i className="fa-solid fa-envelope"></i>
                
                    <input onChange={handleEmail} type="email" className={`form-control py-2 ${validateEmailInput}`} placeholder='company email' name='email' id='email' value={values.email} required/>
                
                </div>
            
                <div style={{color: 'red'}}> { message } </div>
            
            </div>
            
            <div className="mb-1">
            
                <label htmlFor="companyWebsiteURL">Website URL</label>
            
                <div className={`d-flex align-items-center ${style.input}`}>
                
                    <i className="fa-solid fa-link"></i>
                
                    <input onChange={handleChange('companyWebsiteURL')} onKeyUp={(e) => { e.target.value.includes(".com") ? e.target.classList.add("is-valid") : e.target.classList.add("is-invalid") }} type="text" className='form-control py-2' placeholder='company website URL' name='companyWebsiteURL' id='companyWebsiteURL' value={values.companyWebsiteURL} />
                
                </div>
            
            </div>
            
            <div className="mb-1">
                
                <label htmlFor="facebook">Facebook URL</label>
            
                <div className={`d-flex align-items-center ${style.input}`}>
                
                    <i className="fa-brands fa-facebook-f"></i>
                
                    <input onChange={handleChange('facebook')} type="text" className='form-control py-2' placeholder='facebook URL' name='facebook' id='facebook' value={values.facebook} />
                
                </div>
            
            </div>
        
            <div className="mb-1">
            
                <label htmlFor="linkedIn">LinkedIn URL</label>
        
                <div className={`d-flex align-items-center ${style.input}`}>
                
                    <i className="fa-brands fa-linkedin-in"></i>
                
                    <input onChange={handleChange('linkedIn')} type="text" className='form-control py-2' placeholder='linkedIn URL' name='linkedIn' id='linkedIn' value={values.linkedIn} />
                
                </div>
    
            </div>
        
            <div className="mb-1">
            
                <label htmlFor="twitter">X URL</label>
        
                <div className={`d-flex align-items-center ${style.input}`}>
                
                    <i className="fa-brands fa-x-twitter"></i>
                
                    <input onChange={handleChange('twitter')} type="text" className='form-control py-2' placeholder='x URL' name='twitter' id='twitter' value={values.twitter} />
                
                </div>
    
            </div>
        
            <div className="mb-1">
                
                <label htmlFor="instagram">Instagram URL</label>
            
                <div className={`d-flex align-items-center ${style.input}`}>
                
                    <i className="fa-brands fa-instagram"></i>
                
                    <input onChange={handleChange('instagram')} type="text" className='form-control py-2' placeholder='instagram URL' name='instagram' id='instagram' value={values.Instagram} />
                
                </div>
            
            </div>
            
            <div className={`d-flex justify-content-between gap-3 ${style.signBtn}`}>
            
                <button onClick={Previous} className={`btn btn-light ${style.prevBtn}`}>Previous</button>
            
                <button onClick={Continue} className={`btn btn-dark ${style.continueBtn}`}>Confirm</button>
            
            </div>
        
        </form>
    )
}

export default CompanyContact
