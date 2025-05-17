import React from 'react'
import style from './Profile.module.css'
import profilePic from '../../images/profilePic3.jpg'
import { NavLink, Outlet } from 'react-router-dom'

let userData;

if(window.localStorage.getItem("data") == null) {
    userData = [];
} else {
    userData = JSON.parse(window.localStorage.getItem("data"));
}

export default function Profile() {
    return (
    
        <section className={`overflow-hidden`}>
        
            <div className="container">
            
                <div className={`mb-5 ${style.topBg}`}></div>
            
                <div className="container">
                
                    <div className="row">
                    
                        <div className="col-md-4">
                        
                            <div className={`card px-4 py-4 mb-5 ${style.leftSide} ${style.card}`}>
                            
                                <div className={`${style.infoBox}`}>
                                
                                    <div className={`${style.image}`}>
                                    
                                        <img src={profilePic} className={`rounded-pill mb-3`} width={`100%`} height={`auto`} alt="" />
                                    
                                    </div>
                                
                                    <h4 className={`${style.userName}`}>{userData.user.id}</h4>
                                
                                    <p className={`${style.points}`}>pts: <span className='text-success'>48596</span></p>
                                
                                    <p className={`${style.userEmail}`}>joe@gmail.com</p>
                                
                                </div>
                            
                                <div className={`${style.setting}`}>
                                
                                    <ul>

                                        <li><NavLink to='/profile' className={ ({isActive}) => { return (`text-decoration-none text-capitalize ${style.link}` + (isActive ? ' text-success' : ` ${style.nonActive}` )) } }><i className="me-2 fa-regular fa-address-card"></i> account</NavLink></li>
                                    
                                        <li><NavLink to='profile-billing-info' className={ ({isActive}) => { return (`text-decoration-none text-capitalize ${style.link}` + (isActive ? ' text-success' : ` ${style.nonActive}` )) } }><i className="me-2 fa-solid fa-pen-to-square"></i> billing info</NavLink></li>
                                    
                                        <li><NavLink to='profile-payment' className={ ({isActive}) => { return (`text-decoration-none text-capitalize ${style.link}` + (isActive ? ' text-success' : ` ${style.nonActive}` )) } }><i className="me-2 fa-regular fa-credit-card"></i> payment</NavLink></li>
                                    
                                        <li><NavLink to='profile-invoice' className={ ({isActive}) => { return (`text-decoration-none text-capitalize ${style.link}` + (isActive ? ' text-success' : ` ${style.nonActive}` )) } }><i className="me-2 fa-solid fa-file-invoice"></i> invoice</NavLink></li>
                                    
                                        <li><NavLink to='social-profile' className={ ({isActive}) => { return (`text-decoration-none text-capitalize ${style.link}` + (isActive ? ' text-success' : ` ${style.nonActive}` )) } }><i className="me-2 fa-solid fa-share-nodes"></i> social profile</NavLink></li>
                                    
                                        <li><NavLink to='profile-notifications' className={ ({isActive}) => { return (`text-decoration-none text-capitalize ${style.link}` + (isActive ? ' text-success' : ` ${style.nonActive}` )) } }><i className="me-2 fa-regular fa-bell"></i> notifications</NavLink></li>
                                    
                                        <li><NavLink to='profile-setting' className={ ({isActive}) => { return (`text-decoration-none text-capitalize ${style.link}` + (isActive ? ' text-success' : ` ${style.nonActive}` )) } }><i className="me-2 fa-solid fa-gear"></i> settings</NavLink></li>
                                    
                                        <li><NavLink to='sign-out' className={ ({isActive}) => { return (`text-decoration-none text-capitalize ${style.link}` + (isActive ? ' text-success' : ` ${style.nonActive}` )) } }><i className="me-2 fa-solid fa-arrow-right-from-bracket"></i> sign out</NavLink></li>
                                    
                                    </ul>
                                
                                </div>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-md-8">
                        
                            <Outlet></Outlet>
                        
                        </div>
                
                    </div>
                
                </div>
            
            </div>
        
        </section>
    )
}
