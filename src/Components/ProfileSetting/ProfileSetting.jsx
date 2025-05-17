import React, { useRef, useState } from 'react'
import style from './ProfileSetting.module.css'
import layout from '../Style/Layout/Layout.module.css'
import profilePic from '../../images/profilePic3.jpg'

export default function ProfileSetting() {

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
            // props.onFileChange(updatedList)
        }
    }  
    
    function uploadProfilePhoto(e) {
        console.log(e.target.files[0]);
    }

    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }
  
    const onCLoseImage = () => {
        setImage(null)
    }

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
                
                    <h4 className={`${style.title}`}>personal Details: </h4>
            
                    <div className={`${style.card} py-2 mb-2`}>
                    
                        <div className={`text-center border-dashed position-relative ${style.uploadPhoto}`} ref={wrapperRef} onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
                        
                            <input type="file" onChange={onImageChange} name='profilePhoto' id='profilePhoto' />
                    
                            <i className="mt-4 fs-2 text-secondary fa-solid fa-cloud-arrow-up"></i>
                    
                            <p className='mt-4 text-center fw-semibold text-secondary'>
                        
                                <span className='text-success'>Upload an image </span> 
                        
                                or drag and drop
                        
                                <br />
                        
                                <span className='text-secondary'>PNG, JPG</span>
                        
                            </p>
            
                        </div>
                    
                    </div>
            
                    { image ? <div className={`p-2 ${layout.uploadImage} ${layout.roundedImage}`}>
                                
                                <i onClick={onCLoseImage} className={`fa-solid fa-rectangle-xmark ${layout.close}`}></i>
                            
                                <img src={image}  alt="" />
                            
                                </div> : '' }
            
                    <div className={`${style.personalData}`}>
                    
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                        
                            <div className={`${style.editData}`}>
                            
                                <label htmlFor="userName" className={`${style.userName}`}>user name: </label>
                            
                                <div className={`d-flex align-items-center border p-2 mt-2 ${style.iconInput}`}>
                                
                                    <i className="fa-regular fa-user"></i>
                                
                                    <input type="text" className='form-control shadow-none border-0' placeholder={userData.user.userName} name='userName' id='userName' />
                                
                                </div>
                            
                            </div>
                        
                            <div className={`${style.editData}`}>
                                
                                <label htmlFor="email" className={`${style.userName}`}>your email: </label>
                            
                                <div className={`d-flex align-items-center border p-2 mt-2 ${style.iconInput}`}>
                                
                                    <i className="fa-regular fa-envelope"></i>
                                
                                    <input type="email" className='form-control shadow-none border-0' placeholder={userData.user.userEmail} name='email' id='email' />
                                
                                </div>
                            
                            </div>
                        
                            <div className={`${style.editData}`}>
                                
                                <label htmlFor="address" className={`${style.userName}`}>address: </label>
                            
                                <div className={`d-flex align-items-center border p-2 mt-2 ${style.iconInput}`}>
                                
                                    <i className="fa-solid fa-location-dot"></i>
                                
                                    <input type="text" className='form-control shadow-none border-0' placeholder={userData.user.userAddress} name='address' id='address' />
                                
                                </div>
                            
                            </div>
                        
                            <div className={`${style.editData}`}>
                                
                                <label htmlFor="phone" className={`${style.userName}`}>phone number: </label>
                            
                                <div className={`d-flex align-items-center border p-2 mt-2 ${style.iconInput}`}>
                                
                                    <i className="fa-solid fa-phone"></i>
                                
                                    <input type="number" className='form-control shadow-none border-0' placeholder='phone' name='userPhone' id='userPhone' />
                                
                                </div>
                            
                            </div>
                        
                            <div className="saveChanges mt-3">
                            
                                <button className='btn btn-success text-capitalize'>save changes</button>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </div>
        
            <div className={`card ${style.card}`}>
            
                <div className="m-3">
                
                    <h4 className={` ${style.title}`}>change password: </h4>
            
                    <div className={`${style.personalData}`}>
                    
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                        
                            <div className={`${style.editData}`}>
                                
                                <label htmlFor="oldPassword" className={`${style.userName}`}>old password: </label>
                            
                                <div className={`d-flex align-items-center border p-2 mt-2 ${style.iconInput}`}>
                                
                                    <i className="fa-regular fa-eye-slash"></i>
                                
                                    <input type="password" className='form-control shadow-none border-0' placeholder='old password' name='oldPassword' id='oldPassword' />
                                
                                </div>
                            
                            </div>
                        
                            <div className={`${style.editData}`}>
                                
                                <label htmlFor="newPassword" className={`${style.userName}`}>new password: </label>
                            
                                <div className={`d-flex align-items-center border p-2 mt-2 ${style.iconInput}`}>
                                
                                    <i className="fa-regular fa-eye-slash"></i>
                                
                                    <input type="password" className='form-control shadow-none border-0' placeholder='new password' name='newPassword' id='newPassword' />
                                
                                </div>
                            
                            </div>
                        
                            <div className={`${style.editData}`}>
                                
                                <label htmlFor="confirmNewPassword" className={`${style.userName}`}>confirm new password: </label>
                            
                                <div className={`d-flex align-items-center border p-2 mt-2 ${style.iconInput}`}>
                                
                                    <i className="fa-regular fa-eye-slash"></i>
                                
                                    <input type="password" className='form-control shadow-none border-0' placeholder='confirm new password' name='confirmNewPassword' id='confirmNewPassword' />
                                
                                </div>
                            
                            </div>
                        
                            <div className="saveChanges mt-3">
                            
                                <button className='btn btn-success text-capitalize'>save changes</button>
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                </div>
        
            </div>
        
            <div className={`card ${style.card}`}>
            
                <div className="m-3">
                
                    <h4 className={`${style.title} text-danger`}>delete account: </h4>
                
                    <p className={`text-capitalize ${style.description}`}>do you want to delete the account? please press below "Delete" button</p>
            
                    <button className='mt-3 btn btn-danger text-capitalize w-25'>delete</button>
                
                </div>
            
            </div>
        
        </div>
    )
}
