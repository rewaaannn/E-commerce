import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import style from './ProfileAccount.module.css'
import profilePic from '../../images/profilePic3.jpg'
import dashboardImage from '../../images/dashboard-profile.webp'
import axios from 'axios'

const ProfileAccount = props => {
    const wrapperRef = useRef(null)
    
    const [fileList, setFileList] = useState([])
    
    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover')
    
    const onDrop = () => wrapperRef.current.classList.remove('dragover')
    
    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile]
            setFileList(updatedList)
            props.onFileChange(updatedList)
        }
    }  
    
    function uploadProfilePhoto(e) {
        console.log(e.target.files[0]);
    }
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
        useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get('');
            setData(response.data);
            } catch (error) {
            console.error('Error fetching data: ', error);
            } finally {
            setLoading(false);
            }
        };
    
        fetchData();
        }, []);
    
    if (loading) return <p>Loading...</p>;
    
    let userData;

    if(window.localStorage.getItem("data") == null) {
        userData = [];
    } else {
        userData = JSON.parse(window.localStorage.getItem("data"));
    }
    
    return (
        <div className='my-5'>
        
            <div className={`card ${style.card}`}>
            
                <div className="m-3">
                
                    <h4 className={`${style.title}`}>profile information</h4>
                
                    <div className="d-flex align-items-baseline mb-3">
                            
                        <span className={`${style.invoiceDetails}`}>name: </span>
                    
                        <span className={`${style.invoiceInfo}`}>{userData.user.userName}</span>
                    
                    </div>
                
                    <div className="d-flex align-items-baseline mb-3">
                            
                        <span className={`${style.invoiceDetails}`}>phone number: </span>
                    
                        <span className={`${style.invoiceInfo}`}> +125 8967 404</span>
                    
                    </div>
                
                    <div className="d-flex align-items-baseline mb-3">
                            
                        <span className={`${style.invoiceDetails}`}>address: </span>
                    
                        <span className={`${style.invoiceInfo}`}> {userData.user.userAddress} </span>
                    
                    </div>
                
                    <div className="d-flex align-items-baseline mb-3">
                            
                        <span className={`${style.invoiceDetails}`}>email: </span>
                    
                        <span className={`${style.invoiceInfo}`}>  {userData.user.userEmail}</span>
                    
                    </div>
                
                    <div className="d-flex align-items-baseline mb-3">
                            
                            <span className={`${style.invoiceDetails}`}>password: </span>
                        
                            <span className={`${style.invoiceInfo}`}>  ●●●●●●●●●●●●</span>
                        
                        </div>
                
                    <img src={dashboardImage} className={`${style.image}`} alt="dashboard-image" />
                
                </div>
            
            </div>
        
        </div>
    )
}

ProfileAccount.propTypes = {
    onFileChange: PropTypes.func
}

export default ProfileAccount
