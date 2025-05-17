import React from 'react'
import style from '../Login/Login.module.css'

const CompanyAddress = ({nextStep, prevStep, handleChange, values}) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    
    return (
        <form >
        
            {/* <h3 className={`text-center mb-4 ${style.formTitle}`}><i class="fa-solid fa-location-dot"></i> Address</h3> */}
        
            <div className="position-relative m-4">
                <div className="progress" style={{height: `1rem`}}>
                    <div className="progress-bar" style={{width: `50%`}} > </div>
                </div>
                <h3 className="position-absolute top-50 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: `fit`, height:`2rem`}} >1</h3>
                <h3 className="position-absolute top-50 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: `fit`, height:`2rem`}}>2</h3>
                <h3 className="position-absolute top-50 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style={{width: `fit`, height:`2rem`}}>3</h3>
            </div>
        
            <div className="mb-1">
            
                <label htmlFor="country">Country</label>
            
                <div className={`d-flex align-items-center was-validated ${style.input}`}>
                
                    <i className="fa-solid fa-earth-americas"></i>
                
                    <input onChange={handleChange('country')} type="text" className='form-control py-2' placeholder='enter your company name' name='country' id='country' value={values.country} required/>
                
                </div>
            
            </div>
            
            <div className="mb-1">
            
                <label htmlFor="city">City</label>
                
                <div className={`d-flex align-items-center was-validated ${style.input}`}>
                
                    <i className="fa-solid fa-city"></i>
                
                    <input onChange={handleChange('city')} type="text" className='form-control py-2' placeholder='enter your company no' name='city' id='city' value={values.city} required/>
                
                </div>
            
            </div>
            
            <div className="mb-1">
            
                <label htmlFor="address">Address</label>
            
                <div className={`d-flex align-items-center was-validated ${style.input}`}>
                
                    <i className="fa-solid fa-location-arrow"></i>
                
                    <input onChange={handleChange('address')} type="text" className='form-control py-2' placeholder='st. ....' name='address' id='address' value={values.address} required/>
                
                </div>
            
            </div>
            
            <div className={`d-flex justify-content-between gap-3 ${style.signBtn}`}>
            
                <button onClick={Previous} className={`btn btn-light ${style.prevBtn}`}>Previous</button>
            
                <button onClick={Continue} className={`btn btn-dark ${style.continueBtn}`}>Next</button>
            
            </div>
        
        </form>
    )
}

export default CompanyAddress
