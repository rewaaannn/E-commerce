import React, { useState } from 'react'
import style from '../Login/Login.module.css'
import axios from 'axios';

const UserAddress = ({ nextStep, handleChange, values }) => {

  const Continue = e => {
    e.preventDefault();
    nextStep();
  }


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});

const [response, setResponse] = useState(null);


    
// Handle form submission
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const res = await axios.post('http://localhost:3000/src/Components/PostUser/PostUser.php', {
//       userName: values.userName,
//       userEmail: values.userEmail,
//       userPassword: values.userPassword,
//       userBirthday: values.userBirthday,
//       userCountry: values.userCountry,
//       userCity: values.userCity,
//       userAddress: values.userAddress,
//       verificationUserNumber: values.verificationUserNumber
//     }, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       transformRequest: [(data) => {
//         const params = new URLSearchParams();
//         for (const key in data) {
//           params.append(key, data[key]);
//         }
//         return params.toString();
//       }]
//     });
//     setResponse(res.data);
//   } catch (error) {
//     console.error('Error:', error);
//     setResponse({ status: 'error', message: 'Failed to fetch data' });
//   }
// };
// const [values, setValues] = useState({
//   userName: '',
//   userEmail: '',
//   userPassword: '',
//   confirmPassword: '',
//   userBirthday: '',
//   userCountry: '',
//   userCity: '',
//   userAddress: '',
//   verificationUserNumber: '',
//   userImage: null,
// });

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
    formData.append('verificationUserNumber', values.verificationUserNumber);
    formData.append('userImage', values.userImage);

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

  return (
    <form onSubmit={handleSubmit}>

      <div className="position-relative m-4">
          <div className="progress bg-primary" style={{height: `1rem`}}>
              <div className="progress-bar" style={{width: `50%`}} > </div>
          </div>
          <h3 className="position-absolute top-50 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: `fit`, height:`2rem`}} >1</h3>
          <h3 className="position-absolute top-50 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: `fit`, height:`2rem`}}>2</h3>
          <h3 className="position-absolute top-50 start-100 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: `fit`, height:`2rem`}}>3</h3>
      </div>

      <div className="mb-1">

        <label htmlFor="userCountry">Country</label>

        <div className={`d-flex align-items-center was-validated ${style.input}`}>

          <i className="fa-solid fa-earth-americas"></i>

          <input onChange={handleChange('userCountry')} type="text" className='form-control py-2' placeholder='enter your country' name='userCountry' id='userCountry' value={values.userCountry} required />

        </div>

      </div>

      <div className="mb-1">

        <label htmlFor="userCity">City</label>

        <div className={`d-flex align-items-center was-validated ${style.input}`}>

          <i className="fa-solid fa-city"></i>

          <input onChange={handleChange('userCity')} type="text" className='form-control py-2' placeholder='enter your city' name='userCity' id='userCity' value={values.userCity} required />

        </div>

      </div>

      <div className="mb-1">

        <label htmlFor="userAddress">Address</label>

        <div className={`d-flex align-items-center was-validated ${style.input}`}>

          <i className="fa-solid fa-location-arrow"></i>

          <input onChange={handleChange('userAddress')} type="text" className='form-control py-2' placeholder='st. ....' name='userAddress' id='userAddress' value={values.userAddress} required />

        </div>

      </div>

      <div className={`d-flex justify-content-between gap-3 ${style.signBtn}`}>

        {/* <button onClick={Previous} className={`btn btn-light ${style.prevBtn}`}>Previous</button> */}

        {/* <button onClick={Continue} className={`btn btn-success ${style.loginBtn}`}>Next</button> */}

        <button type='submit' className={`btn btn-success ${style.loginBtn}`}>Confirm</button>

      </div>

    </form>
  )
}

export default UserAddress
