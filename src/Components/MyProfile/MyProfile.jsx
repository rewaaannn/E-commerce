import React from 'react'
import style from '../Profile/Profile.module.css'
import profilePic from '../../images/profilePic3.jpg'
import { NavLink, Outlet } from 'react-router-dom'

let userData;

if(window.localStorage.getItem("data") == null) {
    userData = [];
} else {
    userData = JSON.parse(window.localStorage.getItem("data"));
}

export default function MyProfile() {
    return (
    
        <section className={`overflow-hidden`}>
        
            <div className="container">
            
                <div className={`mb-5 ${style.topBg}`}></div>
            
                <div className="container">
                
                    <div className="row">
                    
                        <div className="col-md-4">
                        
                            <div className={`card  mb-5 ${style.leftSide} ${style.card}`}>
                            
                                <div className={`px-4 pt-4 ${style.infoBox}`}>
                                
                                    {/* <div className={`${style.walletPoints}`}>
                                    
                                        <h4 className={`${style.points}`}>Points</h4>
                                    
                                    </div>
                                
                                    <div className="d-flex justify-content-center my-3">
                                    
                                        <div className={`mb-2 p-2 px-4 ${style.colPoints}`}>
                                        
                                            <span className={`${style.num}`}>0</span>
                                        
                                            <span className={`${style.type}`}>total</span>
                                        
                                        </div>
                                    
                                        <div className={`mb-2 p-2 px-4 ${style.colPoints}`}>
                                        
                                            <span className={`${style.num}`}>0</span>
                                            
                                            <span className={`${style.type}`}>used</span>
                                        
                                        </div>
                                    
                                        <div className={`mb-2 p-2 px-4 ${style.colPoints}`}>
                                            
                                            <span className={`${style.num}`}>0</span>
                                            
                                            <span className={`${style.type}`}>available</span>
                                        
                                        </div>
                                    
                                    </div> */}
                                
                                    <div className={`${style.image}`}>
                                    
                                        <img src={profilePic} className={`rounded-pill mb-3`} width={`100%`} height={`auto`} alt="" />
                                
                                    </div>
                                
                                        <h4 className={`${style.userName}`}>{userData.user.userName}</h4>
                                    
                                        <p className={`${style.points}`}>pts: <span className='text-success'>{userData.user.points}</span></p>
                                    
                                        <p className={`${style.userEmail}`}>{userData.user.userEmail}</p>
                                    
                                    </div>
                            
                                <div className={`${style.setting}`}>
                                
                                    <ul className='mb-3 nav-pills nav'>

                                        <li className='nav-item'><NavLink to='account' className={ ({isActive}) => { return (`text-decoration-none text-capitalize nav-link ${style.link}` + (isActive ? ` text-success ${style.linkActive} `: ` ${style.linkNonActive}` )) } }><i className="me-2 fa-regular fa-address-card"></i> account</NavLink></li>
                                    
                                        <li className='nav-item'><NavLink to='my-orders' className={ ({isActive}) => { return (`text-decoration-none text-capitalize nav-link ${style.link}` + (isActive ? ` text-success ${style.linkActive} `: ` ${style.linkNonActive}` )) } }><i className="me-2 fa-regular fa-rectangle-list"></i> my orders</NavLink></li>
                                    
                                        <li className='nav-item'><NavLink to='profile-billing-info' className={ ({isActive}) => { return (`text-decoration-none text-capitalize nav-link ${style.link}` + (isActive ? ` text-success ${style.linkActive} `: ` ${style.linkNonActive}` )) } }><i className="me-2 fa-solid fa-pen-to-square"></i> billing info</NavLink></li>
                                    
                                        <li className='nav-item'><NavLink to='profile-payment' className={ ({isActive}) => { return (`text-decoration-none text-capitalize nav-link ${style.link}` + (isActive ? ` text-success ${style.linkActive} `: ` ${style.linkNonActive}` )) } }><i className="me-2 fa-regular fa-credit-card"></i> payment</NavLink></li>
                                    
                                        <li className='nav-item'><NavLink to='profile-invoice' className={ ({isActive}) => { return (`text-decoration-none text-capitalize nav-link ${style.link}` + (isActive ? ` text-success ${style.linkActive} `: ` ${style.linkNonActive}` )) } }><i className="me-2 fa-solid fa-file-invoice"></i> invoice</NavLink></li>
                                    
                                        <li className='nav-item'><NavLink to='social-profile' className={ ({isActive}) => { return (`text-decoration-none text-capitalize nav-link ${style.link}` + (isActive ? ` text-success ${style.linkActive} `: ` ${style.linkNonActive}` )) } }><i className="me-2 fa-solid fa-share-nodes"></i> social profile</NavLink></li>
                                    
                                        <li className='nav-item'><NavLink to='profile-notifications' className={ ({isActive}) => { return (`text-decoration-none text-capitalize nav-link ${style.link}` + (isActive ? ` text-success ${style.linkActive} `: ` ${style.linkNonActive}` )) } }><i className="me-2 fa-regular fa-bell"></i> notifications</NavLink></li>
                                    
                                        <li className='nav-item'><NavLink to='profile-setting' className={ ({isActive}) => { return (`text-decoration-none text-capitalize nav-link ${style.link}` + (isActive ? ` text-success ${style.linkActive} `: ` ${style.linkNonActive}` )) } }><i className="me-2 fa-solid fa-gear"></i> settings</NavLink></li>
                                    
                                        <li className='nav-item logout border-top m-3'><NavLink to='/login' className={`text-decoration-none text-capitalize w-100 btn btn-success border-rounded mt-3` }><i className="me-2 fa-solid fa-arrow-right-from-bracket"></i> sign out</NavLink></li>
                                    
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
