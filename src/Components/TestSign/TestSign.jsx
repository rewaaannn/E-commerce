import React, { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import style from './UserRegistrationForm.module.css'; // Import your CSS styles
import layout from '../Style/Layout/Layout.module.css'

const TestSign = () => {

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

///////////////////////////////////

  const [values, setValues] = useState({
    userName: '',
    email: '',
    phone: 0,
    password: '',
    userPic: '',
    userCountry: '',
    userCity: '',
    userAddress: '',
    Gender: ''
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
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('password', values.password);
        formData.append('confirmPassword', values.confirmPassword);
        // formData.append('userPic', values.userPic)
        formData.append('userCountry', values.userCountry);
        formData.append('userCity', values.userCity);
        formData.append('userAddress', values.userAddress);
        formData.append('Gender', values.Gender);

        const response = await axios.post('https://cleananode-production.up.railway.app/api/auth/register', formData, {
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
          <>
            <div className={style.formGroup}>
              <label htmlFor="userName">Name:</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={values.userName}
                onChange={handleChange('userName')}
                required
              />
            </div>

            <div className={style.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange('email')}
                required
              />
            </div>

            <div className={style.formGroup}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange('password')}
                required
              />
            </div>

            <div className={style.formGroup}>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange('confirmPassword')}
                required
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            {/* <div className={style.formGroup}>
              <label htmlFor="userBirthday">Date of Birth:</label>
              <input
                type="date"
                id="userBirthday"
                name="userBirthday"
                value={values.userBirthday}
                onChange={handleChange('userBirthday')}
                max="2006-12-31"
                required
              />
            </div> */}

            {/* <div className={style.formGroup}>
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
            </div> */}

            <div className={style.formGroup}>
              <label htmlFor="phone">phone number:</label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange('phone')}
                required
              />
            </div>

              <div className={style.formGroup}>
              
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

            <div className={style.formGroup}>
              <label htmlFor="userCountry">Country:</label>
              <input
                type="text"
                id="userCountry"
                name="userCountry"
                value={values.userCountry}
                onChange={handleChange('userCountry')}
                required
              />
            </div>

            <div className={style.formGroup}>
              <label htmlFor="userCity">City:</label>
              <input
                type="text"
                id="userCity"
                name="userCity"
                value={values.userCity}
                onChange={handleChange('userCity')}
              />
            </div>

            <div className={style.formGroup}>
              <label htmlFor="userAddress">Address:</label>
              <input
                type="text"
                id="userAddress"
                name="userAddress"
                value={values.userAddress}
                onChange={handleChange('userAddress')}
              />
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
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h2>User Registration Form</h2>
        {renderSwitch(step)}

        <div className={style.buttonGroup}>
          {step === 1 && (
            <button type="button" onClick={nextStep} className={style.nextBtn}>
              Next
            </button>
          )}
          {step === 2 ? (
            <>
            
              <button type="button" onClick={prevStep} className={style.prevBtn}>
                Previous
              </button>
              <button type="submit" className={style.submitBtn}>
              Submit
            </button>
            
            </>
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
};

export default TestSign;