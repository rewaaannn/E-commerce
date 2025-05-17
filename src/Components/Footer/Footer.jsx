import React from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'
import logo from '../../images/logo3-removebg-preview.png'

export default function Footer() {
    return (
        <footer className={`bg-dark ${style.footer}`}>
        
            <div className="container">
            
                <div className="row">
                
                    <div className="col-md-6 col-lg-3">
                    
                        <div className={`${style.widget} text-white`}>
                        
                            <Link><img src={logo} alt="" width={100} /></Link>
                        
                            <p className={`${style.description}`}>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
                        
                            <ul className={`d-flex gap-3 m-0 p-0 ${style.social}`}>
                            
                                <li><Link className={`text-white`}><i className="fa-brands fa-square-facebook"></i></Link></li>
                            
                                <li><Link className={`text-white`}><i className="fa-brands fa-x-twitter"></i></Link></li>
                            
                                <li><Link className={`text-white`}><i className="fa-brands fa-instagram"></i></Link></li>
                            
                                <li><Link className={`text-white`}><i className="fa-brands fa-youtube"></i></Link></li>
                            
                            </ul>
                        
                        </div>
                    
                    </div>
                
                    <div className="col-sm-6 col-md-3 col-lg-2">
                    
                    <div className={`${style.widget} text-white`}>
                    
                        <h4 className={` ${style.title}`}>Useful Links</h4>
                    
                        <ul className={`m-0 p-0 ${style.extraLinks}`}>
                        
                            <li><Link className={` ${style.link}`}>About us</Link></li>
                        
                            <li><Link className={` ${style.link}`}>FAQ</Link></li>
                        
                            <li><Link className={` ${style.link}`}>Shop</Link></li>
                        
                            <li><Link className={` ${style.link}`}>Contact</Link></li>
                        
                        </ul>
                    
                    </div>
                
                    </div>
                
                    <div className="col-sm-6 col-md-3 col-lg-2">
                    
                    <div className={`${style.widget} text-white`}>
                    
                        <h4 className={` ${style.title}`}>category</h4>
                    
                        <ul className={`m-0 p-0 ${style.extraLinks}`}>
                        
                            <li><Link className={` ${style.link}`}>plastic</Link></li>
                        
                            <li><Link className={` ${style.link}`}>tin cans</Link></li>
                        
                            <li><Link className={` ${style.link}`}>paper</Link></li>
                        
                            <li><Link className={` ${style.link}`}>Leftover food</Link></li>
                        
                        </ul>
                    
                    </div>
                
                    </div>
                
                    <div className="col-sm-6 col-md-6 col-lg-2">
                    
                        <div className={`${style.widget} text-white`}>
                        
                            <h4 className={` ${style.title}`}>my account</h4>
                        
                            <ul className={`m-0 p-0 ${style.extraLinks}`}>
                            
                                <li><Link className={` ${style.link}`}>my account</Link></li>
                            
                                <li><Link className={` ${style.link}`}>discount</Link></li>
                            
                                <li><Link className={` ${style.link}`}>orders history</Link></li>
                            
                                <li><Link className={` ${style.link}`}>order tracking</Link></li>
                            
                            </ul>
                        
                        </div>
                
                    </div>
                
                    <div className="col-sm-6 col-md-4 col-lg-3">
                    
                        <div className={`${style.widget} text-white`}>
                        
                            <h4 className={` ${style.title}`}>contact info</h4>
                        
                            <ul className={`m-0 p-0 ${style.extraLinks}`}>
                            
                                <li><p><i className="fa-solid fa-location-dot"></i> 123 Street, Cairo, Egypt</p></li>
                            
                                <li><i className="fa-solid fa-envelope"></i><Link className={`${style.link} ${style.email}`}>Cleana@gmail.com</Link></li>
                            
                                <li><p><i className="fa-solid fa-mobile-screen"></i> + 624 709 189 08</p></li>
                            
                            </ul>
                        
                        </div>
            
                    </div>
                
                </div>
            
            </div>
        
        </footer>
    )
}
