import React, { useState } from 'react'
import style from '../Login/Login.module.css'
import {Link} from 'react-router-dom'

const CompanyDetails = ({nextStep, handleChange, values}) => {
    
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    
    
    // company name
    const [name, setName] = useState('')
    const [errorName, setErrorName] = useState('')
    const [validName, setValidName] = useState('')
    values.companyName = name
    function validateCompanyName(event) {
        let newCompanyName = event.target.value
        setName(newCompanyName)
        if ( newCompanyName.length < 2 ) {
            setErrorName("company name must be more than 2")
            setValidName("is-invalid")
        } else {
            setErrorName("")
            setValidName('is-valid')
        }
    }
    
    function handleName(event) {
        handleChange('companyName')
        validateCompanyName(event)
    }
    
    
    // company no (CRN)
    const [number, setNumber] = useState('')
    const [errorNumber, setErrorNumber] = useState('')
    const [validNumber, setValidNumber] = useState('')
    values.companyNumber = number
    function validateCompanyNo(event) {
        let companyNo = event.target.value
        setNumber(companyNo)
        if ( companyNo.length < 8 ) {
            setErrorNumber("Company Registration Number must be 8")
            setValidNumber('is-invalid')
        } else {
            setErrorNumber('')
            setValidNumber('is-valid')
        }
    }
    
    function handleCompanyNo(event) {
        handleChange('companyNumber')
        validateCompanyNo(event)
        formatNumber(event.target.value.replaceAll(" ", ""))
    }
    
    const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
        if (index !== 0 && !(index % 4)) seed += " ";
        return seed + next;
        }, "");
    
    
    
    return (
        <form>
        
            {/* <h3 className={`text-center mb-4 ${style.formTitle}`}><i className="fa-solid fa-address-book"></i> Company Details</h3> */}
        
            <div className="position-relative m-4">
                <div className="progress" style={{height: `1rem`}}>
                    <div className="progress-bar bg-light" style={{width: `50%`}} > </div>
                </div>
                <h3 className="position-absolute top-50 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: `fit`, height:`2rem`}} >1</h3>
                <h3 className="position-absolute top-50 start-50 translate-middle btn btn-sm btn-secondary rounded-pill" style={{width: `fit`, height:`2rem`}}>2</h3>
                <h3 className="position-absolute top-50 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style={{width: `fit`, height:`2rem`}}>3</h3>
            </div>

        
            <div className="mb-1">
                
                <label htmlFor="companyName">Company name</label>
                
                <div className={`d-flex align-items-center ${validName} ${style.input}`}>
                
                    <i className="fa-solid fa-building"></i>
                
                    <input onChange={handleName} type="text" className={`form-control py-2 ${validName}`} placeholder='enter your company name' name='companyName' id='companyName' value={values.companyName} required/>
                
                </div>
                
                <div style={{color: 'red'}}> {errorName} </div>
                
            </div>
            
            <div className="mb-1">
            
                <label htmlFor="companyNumber">Company no (CRN)</label>
                
                <div className={`d-flex align-items-center ${validNumber} ${style.input}`}>
                
                    <i className="fa-solid fa-building"></i>
                
                    <input onChange={handleCompanyNo} type="number" pattern="[0-9]{5}\s+[0-9]{3}\s+[0-9]{3}" className={`form-control py-2 ${validNumber}`} placeholder='enter company registration number' name='companyNumber' id='companyNumber' value={values.companyNumber} required/>
                
                </div>
            
                <div style={{color: 'red'}}> { errorNumber } </div>
            
            </div>
            
            <div className="mb-1">
            
                <label htmlFor="Logo">Upload Company Logo</label>
            
                <div className={`d-flex align-items-center was-validated ${style.fileInput}`}>
                
                    <input onChange={handleChange('Logo')} type="file" className='form-control py-2' name='Logo' id='Logo' value={values.Logo} required/>
                
                </div>
            
            </div>
            
            <div className="mb-1">
            
                <label htmlFor="industry">Industry :</label>
            
                <div className={`py-2 d-flex align-items-center was-validated`}>
                
                    <input onChange={handleChange('PlasticBottles')} type="checkbox" className='ms-3 py-2' name='industry1' id='industry1' value={values.PlasticBottles} />
                
                    <label htmlFor="industry1">Plastic bottles</label>
                
                </div>
            
                <div className={`py-2 d-flex align-items-center was-validated`}>
                
                    <input onChange={handleChange('LeftoverFood')} type="checkbox" className='ms-3 py-2' name='industry2' id='industry2' value={values.LeftoverFood} />
                
                    <label htmlFor="industry2">Leftover food</label>
                
                </div>
            
                <div className={`py-2 d-flex align-items-center was-validated`}>
                
                    <input onChange={handleChange('TinCans')} type="checkbox" className='ms-3 py-2' name='industry3' id='industry3' value={values.TinCans} />
                
                    <label htmlFor="industry3">Tin cans</label>
                
                </div>
            
            </div>
            
            <div className={`${style.signBtn}`}>
            
                <button onClick={Continue} className={`btn btn-dark ${style.loginBtn}`}>Next</button>
            
                <p className='mt-3'>Already have an account? <Link to='/login' className={`text-decoration-none ${style.signUpBtn}`}>Sign in</Link></p>
            
            </div>
        
        </form>
    )
}

export default CompanyDetails


