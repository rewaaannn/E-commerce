import React, { useEffect, useRef, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import style from './Scanner.module.css'
import scanImg from '../../images/scan.jpg'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Scanner() {

    const [scanResult, setScanResult] = useState(null);

    useEffect ( () => {
    
        const scanner = new Html5QrcodeScanner('reader', {
        
            qrbox: {
            
                width: 250,
                height: 250
            
            },
        
            fbs: 5,
        
        })
    
        scanner.render(success, error);
    
        function success(result) {
            scanner.clear()
            setScanResult(result)
        }
    
        function error(err) {
            console.warn(err)
        }
    
    },[])

    let userData;

    if(window.localStorage.getItem("data") == null) {
        userData = [];
        
    } else {
        userData = JSON.parse(window.localStorage.getItem("data"));
    }

    const [values, setValues] = useState({
        id: userData.user.id,
        userName: userData.user.userName
      });

      const handleChange = (input) => (e) => {
        setValues({ ...values, [input]: e.target.value });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Example POST request using axios
          const formData = new FormData();
          formData.append('id', userData.user.id);
          formData.append('userName', userData.user.userName);
    
          const response = await axios.post(`${scanResult}`, formData, {
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
    
        <>
    
            <section className={`${style.backgroundTitle}`}>

                <h3>Scan</h3>

            </section>
        
            <div className='container'>
            
                <div className={`d-flex justify-content-center align-items-center ${style.scan}`}>
                                
                    <div className={`w-50`}>
                    
                        { scanResult  
                        
                            ? 
                            <div>
                            
                                <form onSubmit={handleSubmit}>
                                
                                    <input type="hidden" onChange={handleChange('id')} value={values.id} id='id' />
                                
                                    <input type="hidden" onChange={handleChange('userName')} value={values.userName} id='userName' />
                                
                                    <input type="submit" />
                                
                                </form>
                            
                            </div>
                        
                            : 
                            <div id='reader'></div>
                        
                        }
                    
                    </div>
                    {/* <div className={`w-50`}>
                    
                        <img src={scanImg} className={`${style.scanImage}`}  alt="" />
                    
                    </div> */}
                
                </div>
            
            </div>
        
        </>
    )

}
