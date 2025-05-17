import React, { Component } from 'react';
import UserDetails from '../UserDetails/UserDetails';
import UserInfo from '../UserInfo/UserInfo';
import UserAddress from '../UserAddress/UserAddress';
import Confirmation from '../Confirmation/Confirmation';
import axios from 'axios';

export default class User extends Component {
    state = {
        step: 1,
        userName: '',
        userEmail: '',
        userPassword: '',
        userBirthday: '',
        userCountry: '',
        userCity: '',
        userAddress: '',
        //userImage: null, // Store file object for userImage
    };

    // // Function to handle form submission
    // handleSubmit = async () => {
    //     const { userName, userEmail, userPassword, userBirthday, userCountry, userCity, userAddress, verificationUserNumber, userImage } = this.state;

    //     // Create FormData object for sending form data including files
    //     const formData = new FormData();
    //     formData.append('userName', userName);
    //     formData.append('userEmail', userEmail);
    //     formData.append('userPassword', userPassword);
    //     formData.append('userBirthday', userBirthday);
    //     formData.append('userCountry', userCountry);
    //     formData.append('userCity', userCity);
    //     formData.append('userAddress', userAddress);
    //     formData.append('verificationUserNumber', verificationUserNumber);
    //     if (userImage) {
    //         formData.append('userImage', userImage); // Append file object
    //     }

    //     try {
    //         // Send POST request using axios
    //         const response = await axios.post("http://localhost:3000/src/Components/PostUser/PostUser.php", formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         });

    //         console.log(response.data); // Log response for debugging

    //         // Handle success and update UI accordingly (e.g., show confirmation page)
    //         if (response.data.status === 'success') {
    //             this.setState({ step: 4 }); // Navigate to confirmation page
    //         } else {
    //             alert('Failed to register user'); // Handle failure
    //         }
    //     } catch (error) {
    //         console.error('Error occurred:', error); // Log and handle error
    //     }
    // };

    // Function to proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    // Function to handle input changes in the form
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    // Function to handle file input change for userImage
    handleImageChange = e => {
        this.setState({ userImage: e.target.files[0] }); // Store file object
    };

    // Render method based on current step
    render() {
        const { step, userName, userEmail, userPassword, userBirthday, userCountry, userCity, userAddress, verificationUserNumber } = this.state;
        const values = { userName, userEmail, userPassword, userBirthday, userCountry, userCity, userAddress, verificationUserNumber };

        switch (step) {
            case 1:
                return <UserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
            case 2:
                return <UserInfo nextStep={this.nextStep} handleChange={this.handleChange} handleImageChange={this.handleImageChange} values={values} />;
            case 3:
                return <UserAddress nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
            case 4:
                return <Confirmation values={values} />;
            default:
                return null;
        }
    }
}