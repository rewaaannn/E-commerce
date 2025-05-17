import React, { useState } from 'react'
import style from '../Login/Login.module.css'
import layout from '../Style/Layout/Layout.module.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const UserInfo = ({ prevStep, nextStep, handleChange, handleChange2, values }) => {

  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  const [image, setImage] = useState(null)

  const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
          setImage(URL.createObjectURL(event.target.files[0]));
      }
  }

  function handleUserImage (event) {
    handleChange('userImage')
    onImageChange(event)
}

  const onCLoseImage = () => {
      setImage(null)
  }

  const [errorInput, setErrorInput] = useState(false)
    
  function checkValues(e) {
  
      if(values.userBirthday === null || values.userNumber === null ) {
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
    <>
    
      <div className="position-relative m-4">
          <div className="progress" style={{height: `1rem`}}>
              <div className="progress-bar" style={{width: `50%`}} > </div>
          </div>
          <h3 className="position-absolute top-50 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: `fit`, height:`2rem`}} >1</h3>
          <h3 className="position-absolute top-50 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: `fit`, height:`2rem`}}>2</h3>
          <h3 className="position-absolute top-50 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style={{width: `fit`, height:`2rem`}}>3</h3>
      </div>
    
      <div className="mb-1">
      
      <div className="row align-items-center mb-3">
                    
                    <div className="col-2">
                    
                        <div className={`${layout.inputTitle}`}>
                        
                            <h4>profile</h4>
                        
                        </div>
                    
                    </div>
                
                    <div className="col-10">
                    
                        <div className={` ${layout.rightInput}`}>
                        
                            <div className='d-flex gap-4'>
                            
                                <div className={`${layout.uploadImage} ${layout.roundedImage}`}>
                                
                                    <input required type="file" onChange={ (e) => { onImageChange(e); handleChange2('userImage') } } name='storeLogo' id='StoreLogo' />
                                
                                    <i className="fa-solid fa-plus"></i>
                                
                                </div>
                        
                                { image ? <div className={`p-2 ${layout.uploadImage} ${layout.roundedImage}`}>
                                
                                <i onClick={onCLoseImage} className={`fa-solid fa-rectangle-xmark ${layout.close}`}></i>
                            
                                <img src={image}  alt="" />
                            
                                </div> : '' }
                        
                            </div>
                          
                        </div>
                    
                    </div>
                
                </div>
      
      </div>
    
      <div className="mb-1">

        <label htmlFor="Gender">Gender:</label>

        <div className={`d-flex align-items-center `}>

          <input onChange={handleChange('Gender')} type="radio" placeholder='your birthday' className=' py-2 ms-4' name='Gender' id='Male' checked />

          <label className='' htmlFor="Male">Male</label>

        </div>

        <div className={`d-flex align-items-center `}>

          <input onChange={handleChange('Gender')} type="radio" placeholder='your birthday' className=' py-2 ms-4' name='Gender' id='female' />

          <label className='' htmlFor="female">Female</label>

        </div>

      </div>

      <div className="mb-1">

        <label htmlFor="userBirthday">Date of Birth</label>

        <div className={`d-flex align-items-center ${style.input}`}>

          <input onChange={handleChange('userBirthday')} type="date" placeholder='your birthday' className='form-control py-2' value={values.userBirthday} max="2024-12-31" name='userBirthday' id='userBirthday' />

        </div>

      </div>

      <div className="mb-1">

        <label htmlFor="userNumber">Phone number</label>

        <div className={`d-flex align-items-center bg-light `}>

          <PhoneInput country={'eg'} inputProps={{ required: true, }} required />

        </div>

        {/* {!valid && <p>Please enter a valid phone number </p>} */}

      </div>

      <div className="mb-1">

        <label htmlFor="verificationUserNumber">Verification code</label>

        <div className={`d-flex align-items-center ${style.input}`}>

          <input onChange={handleChange('verificationUserNumber')} type="number" className={`form-control py-2 ${style.counter}`} placeholder='Verification code' value={values.verificationUserNumber} name='verificationUserNumber' id='verificationUserNumber' required />

          <button className={`btn btn-light ${style.sendCheckValidation}`}>Send</button>

        </div>

      </div>

      <div className={`d-flex justify-content-between gap-3 ${style.signBtn}`}>

        <button onClick={Previous} className={`btn btn-light ${style.prevBtn}`}>Previous</button>

        <button onClick={checkValues} className={`btn btn-success ${style.continueBtn}`}>Next</button>

      </div>

    </>
  )
}

export default UserInfo
