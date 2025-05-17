import React, { createContext, useEffect, useRef, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../../images/logo3-removebg-preview.png'
import style from './Header.module.css'
import profilePic from '../../images/profilePic3.jpg'
export const ThemeContext = createContext(null)

export default function Header() {
    
    const [color, setColor] = useState(false)
    
    function changeColor () {
        if ( window.scrollY >= 90 ) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    
    window.addEventListener('scroll', changeColor)
    
    const [open, setOpen] = useState(false)
    
    let menuRef = useRef()
    
    useEffect(() => {
        
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        
        document.addEventListener('mousedown', handler)
        
        return() => {
            document.removeEventListener('mousedown', handler);
        }
        
    });
    
    const [theme, setTheme] = useState('light')

    function toggleTheme() {
        setTheme((curr) => (curr === 'light' ? 'dark': 'light' ) )
    }
    
    if(theme === 'dark') {
        document.body.style.backgroundColor = '#1c2128';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#1c2128';
    }
    
    // const [isUserLogin, setIsUserLogin] = useState('d-none')
    
    // let userData;

    // if(window.localStorage.getItem("data") == null) {
    //     userData = [];
    //     setIsUserLogin('d-none')
    // } else {
    //     userData = JSON.parse(window.localStorage.getItem("data"));
    //     setIsUserLogin('d-block')
    // }
    
    function signOut() {
        window.localStorage.removeItem("isLoggedIn")
        window.localStorage.removeItem("data");
        // setIsUserLogin('d-none')
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
        
            <header>
            
                <nav className={color ? `navbar navbar-expand-lg z-2 ${style.header} ${style.headerBg}` : `navbar navbar-expand-lg ${style.header} `} >
                    <div className="container">
                        <NavLink className="navbar-brand" to="/"><img src={logo} width={100} alt="" /></NavLink>
                        <button className="navbar-toggler bg-light border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
                                <li className={`nav-item ${style.link}`}>
                                    <NavLink className={({isActive}) => { return ('px-3 py-2 rounded-md text-sm text-decoration-none nav-link' + (isActive ? ' text-white bg-black bg-opacity-25  ' : ' text-white')) }} aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className={`nav-item ${style.link}`}>
                                    <NavLink className={({isActive}) => { return ('px-3 py-2 rounded-md text-sm text-decoration-none nav-link' + (isActive ? ' text-white bg-black bg-opacity-25  ' : ' text-white')) }} to="about">About</NavLink>
                                </li>
                                
                                <li className={`nav-item ${style.link}`}>
                                    <NavLink className={({isActive}) => { return ('px-3 py-2 rounded-md text-sm text-decoration-none nav-link' + (isActive ? ' text-white bg-black bg-opacity-25  ' : ' text-white')) }} to="service">Service</NavLink>
                                </li>
                                
                                <li className={`nav-item ${style.link}`}>
                                    <NavLink className={({isActive}) => { return ('px-3 py-2 rounded-md text-sm text-decoration-none nav-link' + (isActive ? ' text-white bg-black bg-opacity-25  ' : ' text-white')) }} to="shop">Shop</NavLink>
                                </li>
                                
                                <li className={`nav-item ${style.link}`}>
                                    <NavLink className={({isActive}) => { return ('px-3 py-2 rounded-md text-sm text-decoration-none nav-link' + (isActive ? ' text-white bg-black bg-opacity-25  ' : ' text-white')) }} to="scan">Scan</NavLink>
                                </li>
                                
                                {/* <li className={`nav-item ${style.link}`}>
                                    <NavLink className={({isActive}) => { return ('px-3 py-2 rounded-md text-sm text-decoration-none nav-link' + (isActive ? ' text-white bg-black bg-opacity-25  ' : ' text-white')) }} to="scann">Scannnn</NavLink>
                                </li> */}
                                
                                <li className={`nav-item ${style.link}`}>
                                    <NavLink className={({isActive}) => { return ('px-3 py-2 rounded-md text-sm text-decoration-none nav-link' + (isActive ? ' text-white bg-black bg-opacity-25  ' : ' text-white')) }} to="contact">Contact</NavLink>
                                </li>
                                
                                <li className={`nav-item ${style.link}`}>
                                    {/* <NavLink className={({isActive}) => { return ('px-3 py-2 rounded-md text-sm text-decoration-none nav-link' + (isActive ? ' text-white bg-black bg-opacity-25  ' : ' text-white')) }} to="en/dashboard">admin</NavLink> */}
                                </li>
                                
                            </ul>
                            <div className="d-flex align-items-center position-relative">
                            
                                <div className={`${style.profileBox}`} ref={menuRef}>
                                
                                    <h3 to='profile' onClick={ ()=> {setOpen(!open)} }  className={`text-white me-3 text-align-center ${style.profile} ${theme === 'dark' ? ` ${style.profileBg} ` : ` ${style.profile} `}`} > <img src={profilePic} className={`rounded-pill`} width={36} height={36} alt="" /> </h3>
                                
                                    <ul className={`position-absolute ${style.ul} ${open ? `${style.active}`: `${style.inactive}` }`} name='profile' id='profile'>
                                    
                                        <li className={`bg-dark ${style.points}`}><span className={`${style.one}`}>points</span> <span> 0</span></li>
                                    
                                        <li><NavLink to='profile/account' className={` ${style.linkProfile}`}><i className="fa-solid fa-circle-user"></i> profile</NavLink></li>
                                    
                                        <li><NavLink to='user/wishlist' className={` ${style.linkProfile}`}><i className="fa-solid fa-heart"></i> my wishlist</NavLink></li>
                                    
                                        <li><NavLink to='/cart' className={` ${style.linkProfile}`}><i className="fa-solid fa-cart-shopping"></i> my cart</NavLink></li>
                                    
                                        <li><NavLink to='Checkout' className={` ${style.linkProfile}`}><i className="fa-solid fa-money-bill-1 "></i> checkout</NavLink></li>
                                        
                                        <li className="d-flex justify-content-between align-items-center">
                                        
                                            <h4 className={`${style.linkProfile}`}><i className="fa-regular fa-moon"></i>mode </h4>
                                        
                                            <div className="right" >
                                            
                                                <label class={`${style.switch}`} >
                                                    <input type="checkbox" class={`${style.inputDarkMode}`} onClick={toggleTheme} />
                                                    <span class={`${style.slider}`}></span>
                                                </label>
                                            
                                            </div>
                                        
                                        </li>
                                    
                                        <li><Link to='/login' onClick={signOut} className={`bg-transparent border-none ${style.linkProfile}`} ><i className="fa-solid fa-arrow-right-from-bracket "></i> logout</Link></li>
                                    
                                    </ul>
                                
                                </div>
                            
                                <NavLink to='login' className={`btn btn-outline-light`} type="submit">Login</NavLink>
                                {/* <NavLink to='cart' className={`btn btn-outline-light`} type="submit"><i className='fa fa-shopping-cart me-3'></i>Cart </NavLink> */}
                            
                            </div>
                        </div>
                    </div>
                </nav>
            
            </header>
        
        </ThemeContext.Provider>
    )
}
