import React, { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import { Link } from 'react-router-dom'
import style from '../Login/Login.module.css'
import layout from '../Style/Layout/Layout.module.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Register = () => {

    let [visible, setVisible] = useState(false)

    let [visible2, setVisible2] = useState(false)

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

    //////////////////////////////////////////////

    const [values, setValues] = useState({
        userName: '',
        userEmail: '',
        userPassword: '',
        userBirthday: '',
        userCountry: '',
        userCity: '',
        userAddress: '',
    });

    const [step, setStep] = useState(1); // State to manage form steps

    const handleChange = (input) => (e) => {
        setValues({ ...values, [input]: e.target.value });
    };

    const handleChangeImage = (input) => (e) => {
        setValues({ ...values, [input]: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Example POST request using axios
            const formData = new FormData();
            formData.append('userName', values.userName);
            formData.append('userEmail', values.userEmail);
            formData.append('userPassword', values.userPassword);
            formData.append('userBirthday', values.userBirthday);
            formData.append('userCountry', values.userCountry);
            formData.append('userCity', values.userCity);
            formData.append('userAddress', values.userAddress);

            const response = await axios.post('http://localhost:3000/src/Components/PostUser/PostUser.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response.data);
            // Handle success or redirection logic here
        } catch (error) {
            console.error('Error:', error);
            // Handle error or display error message
        }
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const renderSwitch = (step) => {
        switch (step) {
          case 1:
            return (
                <div>

                    <div className="position-relative m-4">
                        <div className="progress" style={{ height: `1rem`,background: `white` }}>
                            <div className="progress-bar bg-light" style={{ width: `50%` }} > </div>
                        </div>
                        <h3 className="position-absolute top-50 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style={{ width: `fit`, height: `2rem` }} >1</h3>
                        <h3 className="position-absolute top-50 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style={{ width: `fit`, height: `2rem` }}>2</h3>
                        {/* <h3 className="position-absolute top-50 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style={{ width: `fit`, height: `2rem` }}>3</h3> */}
                    </div>

                    <div className="mb-1">

                        <label htmlFor="userName">User name</label>

                        <div className={`d-flex align-items-center ${style.input}`}>

                            <i className="fa-solid fa-user"></i>

                            <input value={values.userName} onChange={handleChange('userName')} type="text" className={`form-control py-2`} placeholder='enter your name' name='userName' id='userName' required />

                        </div>

                    </div>

                    <div className="mb-1">

                        <label htmlFor="userEmail">Email</label>

                        <div className={`d-flex align-items-center  ${style.input}`}>

                            <i className="fa-solid fa-envelope"></i>

                            <input value={values.userEmail} onChange={handleChange('userEmail')} type="email" className={`form-control py-2`} placeholder='enter your email' name='userEmail' id='userEmail' required />

                        </div>

                    </div>

                    <div className="mb-1">

                        <label htmlFor="userPassword">Password</label>

                        <div className={`d-flex align-items-center ${style.input}`}>

                            <i onClick={() => setVisible(!visible)} className={`cursor-pointer ${visible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}`}></i>

                            <input value={values.userPassword}
            onChange={handleChange('userPassword')} type={visible ? 'text' : 'password'} className={`form-control py-2`} placeholder='enter your password' name='userPassword' id='userPassword' required />

                        </div>

                    </div>

                    <div className="mb-1">

                        <label htmlFor="password">Confirm Password</label>

                        <div className={`d-flex align-items-center ${style.input}`}>

                            <i onClick={() => setVisible2(!visible2)} className={`cursor-pointer ${visible2 ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}`}></i>

                            <input type={visible2 ? 'text' : 'password'} className={`form-control py-2 `} placeholder='confirm your password' name='password' id='password' required />

                        </div>

                    </div>

                    {/* { checkPassword ? <PasswordChecklist
                rules={["capital", "match", "specialChar", "minLength", "number"]}
                minLength={8}
                value={password}
                valueAgain={matchPassword}
                /> : '' } */}

                </div>
            );
        case 2:
            return (
                <>

                    <div className="position-relative m-4">
                        <div className="progress" style={{ height: `1rem`, background: `#0d6ef` }}>
                            <div className="progress-bar" style={{ width: `50%` }} > </div>
                        </div>
                        <h3 className="position-absolute top-50 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style={{ width: `fit`, height: `2rem` }} >1</h3>
                        <h3 className="position-absolute top-50 start-100 translate-middle btn btn-sm btn-primary rounded-pill" style={{ width: `fit`, height: `2rem` }}>2</h3>
                        {/* <h3 className="position-absolute top-50 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style={{ width: `fit`, height: `2rem` }}>3</h3> */}
                    </div>

                    <div className="mb-1">

                        <label htmlFor="userBirthday">Date of Birth</label>

                        <div className={`d-flex align-items-center ${style.input}`}>

                            <input value={values.userBirthday} onChange={handleChange('userBirthday')} max="2006-12-31" type="date" placeholder='your birthday' className='form-control py-2' name='userBirthday' id='userBirthday' />

                        </div>

                    </div>

                    <div className="mb-1">
              
              <label htmlFor="userCountry">Country</label>
      
              <div className={`d-flex align-items-center was-validated ${style.input}`}>
      
                <i className="fa-solid fa-earth-americas"></i>
      
                <input value={values.userCountry} onChange={handleChange('userCountry')} type="text" className='form-control py-2' placeholder='enter your country' name='userCountry' id='userCountry' required />
      
              </div>
      
            </div>
      
            <div className="mb-1">
      
              <label htmlFor="userCity">City</label>
      
              <div className={`d-flex align-items-center was-validated ${style.input}`}>
      
                <i className="fa-solid fa-city"></i>
      
                <input value={values.userCity}
        onChange={handleChange('userCity')} type="text" className='form-control py-2' placeholder='enter your city' name='userCity' id='userCity' required />
      
              </div>
      
            </div>
      
            <div className="mb-1">
      
              <label htmlFor="userAddress">Address</label>
      
              <div className={`d-flex align-items-center was-validated ${style.input}`}>
      
                <i className="fa-solid fa-location-arrow"></i>
      
                <input value={values.userAddress}
        onChange={handleChange('userAddress')} type="text" className='form-control py-2' placeholder='st. ....' name='userAddress' id='userAddress' required />
      
              </div>
      
            </div>

                </>
            );
            // case 3:
            //   return (
            //     <>
            //       {/* <div className={style.formGroup}>
            //         <label htmlFor="verificationUserNumber">Phone Number:</label>
            //         <input
            //           type="tel"
            //           id="verificationUserNumber"
            //           name="verificationUserNumber"
            //           value={values.verificationUserNumber}
            //           onChange={handleChange('verificationUserNumber')}
            //         />
            //       </div>
      
            //       <div className={style.formGroup}>
            //         <label htmlFor="userImage">Profile Image:</label>
            //         <input
            //           type="file"
            //           id="userImage"
            //           name="userImage"
            //           onChange={handleChangeImage('userImage')}
            //           accept="image/*"
            //         />
            //       </div> */}
            //     </>
            //   );
            default:
              return null;
          }
    };

    return (
    
        <section className={`px-3 ${style.loginSec}`} >

        <div className="container">
        
            <div className="row row-gap-5 justify-content-center align-items-center">
            
                <div className="col-lg-6 d-sm-none d-lg-block">
                
                    <div className={`${style.leftBox}`}>
                    
                        <h2 className={`${style.title}`}>Sign up</h2>
                    
                        <h4 className={`${style.subTitle}`}>Create new account</h4>
                    
                        <p className={`${style.disc}`}>"Complete the form to start your journey with us."</p>
                    
                        <Link to='/service' className={`btn btn-success ${style.loginBtn}`}>Learn More</Link>
                    
                    </div>
                
                </div>
            
                <div className="col-lg-6">
                
                    <div className={`d-flex justify-content-center ${style.rightBox}`}>
                    
                    <form className={`py-5 px-5 text-white ${style.form}`} >
                            
                      <h3 className={`${style.title}`}>Sign up</h3>
                  
                  
                      <div>
                      
                      <div className={style.formContainer}>
                      <form onSubmit={handleSubmit}>
                          {renderSwitch(step)}

                          <div className={style.buttonGroup}>
                              {step === 1 && (

                                  <>

                                      <div className={`${style.signBtn}`}>

                                          <button type="button" onClick={nextStep} className={`btn btn-success ${style.loginBtn}`}>Next</button>

                                          <p className='mt-3'>Already have an account? <Link to='/login' className={`text-decoration-none ${style.signUpBtn}`}>Sign in</Link></p>

                                      </div>

                                      <div className={`${style.quickSign}`}>

                                          <Link to='' className={`${style.signWithGoogle}`}><i className="fa-brands fa-google"></i> Sign in with Google</Link>

                                      </div>

                                      <div className={`${style.extraSign}`}>

                                          <h5>Get the app</h5>

                                          <div className={`d-flex justify-content-between align-items-center flex-wrap text-align-center mt-3 ${style.androidAndIos}`}>

                                              <Link to="" tabIndex="0"><img className="bn46 mb-2" width={150} height={50} src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="bn45" /></Link>

                                              <Link to="" tabIndex="0"><img className="bn45" width={170} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45" /></Link>

                                          </div>

                                      </div>

                                  </>

                              )}

                              {step === 2 && (
                                  <div className={`d-flex justify-content-between gap-3 ${style.signBtn}`}>

                                      <button type="button" onClick={prevStep} className={`btn btn-light ${style.prevBtn}`}>Previous</button>

                                      <button type="submit" className={`btn btn-success ${style.continueBtn}`}>Confirm</button>

                                  </div>
                              )}
                          </div>
                      </form>
                      </div>
                            
                            </div>
                        
                        </form>
                    
                    </div>
                
                </div>
            
            </div>
        
        </div>

        </section>
    )
}

export default Register;