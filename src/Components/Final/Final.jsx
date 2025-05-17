import axios from 'axios';
import React, { useState } from 'react'
import style from '../Login/Login.module.css'
import layout from '../Style/Layout/Layout.module.css'
import { Link, useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';

export default function Final() {

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

    let [visible, setVisible] = useState(false)

    let [visible2, setVisible2] = useState(false)

    ////////////////////////////////

    const [values, setValues] = useState({
        userName: '',
        email: '',
        phone: '',
        password: '',
        userPic: '',
        userCountry: '',
        userCity: '',
        userAddress: '',
        Gender: 'Male'
    });

    const [step, setStep] = useState(1); // State to manage form steps

    const handleChange = (input) => (e) => {
        setValues({ ...values, [input]: e.target.value });
    };

    const handleChangeImage = (input) => (e) => {
        setValues({ ...values, [input]: e.target.files[0] });
    };

    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            // Example POST request using axios
            const formData = new FormData();
            formData.append('userName', values.userName);
            formData.append('email', values.email);
            // formData.append('phone', values.phone);
            formData.append('password', values.password);
            formData.append('userPic', values.userPic)
            formData.append('userCountry', values.userCountry);
            formData.append('userCity', values.userCity);
            formData.append('userAddress', values.userAddress);
            formData.append('Gender', values.Gender);

            const response = await axios.post('https://cleananode-production.up.railway.app/api/auth/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.data.status === 'success') {
                alert('Register successful!'); // Replace with your success logic (e.g., redirect)
                window.localStorage.setItem('isRegistering', true)
                // const result = await response.json();
                // navigate('/login');
                // window.location.reload();
            } else {
                setError(response.data.message || 'Register failed. Please try again.');
            }
            // Handle success or redirection logic here
        } catch (error) {
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

                                                                    <input type="file" value={values.userPic} onChange={onImageChange} name='userPic' id='userPic' />

                                                                    <i className="fa-solid fa-plus"></i>

                                                                </div>

                                                                {image ? <div className={`p-2 ${layout.uploadImage} ${layout.roundedImage}`}>

                                                                    <i onClick={onCLoseImage} className={`fa-solid fa-rectangle-xmark ${layout.close}`}></i>

                                                                    <img src={image} alt="" />

                                                                </div> : ''}

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        
                                            <div className="mb-1">

                                                <label htmlFor="userName">User name</label>

                                                <div className={`d-flex align-items-center ${style.input}`}>

                                                    <i className="fa-solid fa-user"></i>

                                                    <input value={values.userName} onChange={handleChange('userName')} type="text" className={`form-control py-2`} placeholder='enter your name' name='userName' id='userName' required />

                                                </div>

                                            </div>

                                            <div className="mb-1">

                                                <label htmlFor="email">Email</label>

                                                <div className={`d-flex align-items-center  ${style.input}`}>

                                                    <i className="fa-solid fa-envelope"></i>

                                                    <input value={values.email} onChange={handleChange('email')} type="email" className={`form-control py-2`} placeholder='enter your email' name='email' id='email' required />

                                                </div>

                                            </div>

                                            {/* <div className="mb-1">

                                                <label htmlFor="phone">Phone number</label>

                                                <div className={`d-flex align-items-center bg-light `}>

                                                <PhoneInput
                                                    name="phone"
                                                    type="number"
                                                    country={"eg"}
                                                    enableAreaCodes={true}
                                                    
                                                    areaCodes={{ eg: ["000"] }}
                                                    inputProps={{
                                                    name: "phone",
                                                    country: "eg",
                                                    required: true,
                                                    autoFocus: true
                                                    }}
                                                    value={values.phone}
                                                    onChange={handleChange('phone')}
                                                    inputStyle={{
                                                    width: "230px",
                                                    height: "45px"
                                                    }}
                                                />

                                                </div>

                                                

                                            </div> */}

                                            <div className="mb-1">

                                                <label htmlFor="password">Password</label>

                                                <div className={`d-flex align-items-center ${style.input}`}>

                                                    <i onClick={() => setVisible(!visible)} className={`cursor-pointer ${visible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}`}></i>

                                                    <input value={values.password}
                                                onChange={handleChange('password')} type={visible ? 'text' : 'password'} className={`form-control py-2`} placeholder='enter your password' name='password' id='password' required />

                                                </div>

                                            </div>

                                            <div className="mb-1">

                                                <label htmlFor="cPassword">Confirm Password</label>

                                                <div className={`d-flex align-items-center ${style.input}`}>

                                                    <i onClick={() => setVisible2(!visible2)} className={`cursor-pointer ${visible2 ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}`}></i>

                                                    <input type={visible2 ? 'text' : 'password'} className={`form-control py-2 `} placeholder='confirm your password' name='cPassword' id='cPassword' required />

                                                </div>

                                            </div>
                                        
                                            <div className="mb-1">

                                                <label htmlFor="Gender">Gender:</label>

                                                <div className={`d-flex align-items-center `}>

                                                    <input type="radio" placeholder='your birthday' className=' py-2 ms-4' name='Gender' id='Male' value='male' checked />

                                                    <label className='' htmlFor="Male">Male</label>

                                                </div>

                                                <div className={`d-flex align-items-center `}>

                                                    <input type="radio" placeholder='your birthday' className=' py-2 ms-4' name='Gender' id='female' value='female' />

                                                    <label className='' htmlFor="female">Female</label>

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
                                        
                                            <div className={`${style.signBtn}`}>
                                
                                                <button type='submit' disabled={loading} className={`btn btn-success ${style.loginBtn}`}>{loading ? 'register in...' : 'Register'}</button>
                                            
                                                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                                            
                                                <p className='mt-3'>Have an account already? <Link to='/login' className={`text-decoration-none ${style.signUpBtn}`}>Sign in</Link></p>
                                            
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
