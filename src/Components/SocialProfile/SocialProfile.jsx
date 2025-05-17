import React from 'react'
import style from './SocialProfile.module.css'

export default function SocialProfile() {
    return (
        <div className='my-5'>
        
            <div className={`card ${style.card}`}>
            
                <h4 className={`m-3 ${style.title}`}>social profile:</h4>
            
                <div className={`border-top ${style.social}`}>
                
                    <div className={`${style.socialProfile} mx-3 my-5 d-flex justify-content-between align-items-center `}>
                    
                        <div className={`${style.left}`}>
                        
                            <h6 className={`${style.userName}`}>twitter</h6>
                        
                        </div>
                    
                        <div className={`w-50 ${style.right}`}>
                            
                                <div className={`border d-flex align-items-baseline gap-2 p-1 ${style.iconInput}`}>
                                
                                    <i className="fa-brands fa-x-twitter"></i>
                                
                                    <input type="text" className='form-control w-100 outline-0 border-0 shadow-none' placeholder='twitter profile handle' name='twitterHandle' id='twitterHandle' />
                                
                                </div>
                        
                                <div className={`${style.text}`}>
                                
                                    <label htmlFor="twitterHandle">add your twitter name</label>
                                
                                </div>
                            
                        </div>
                    
                    </div>
                
                    <div className={`${style.socialProfile} mx-3 my-5 d-flex justify-content-between align-items-center `}>
                    
                        <div className={`${style.left}`}>
                        
                            <h6 className={`${style.userName}`}>facebook</h6>
                        
                        </div>
                    
                        <div className={`w-50 ${style.right}`}>
                            
                                <div className={`border d-flex align-items-baseline gap-2 p-1 ${style.iconInput}`}>
                                
                                    <i className="fa-brands fa-facebook-f"></i>
                                
                                    <input type="text" className='form-control w-100 outline-0 border-0 shadow-none' placeholder='facebook profile handle' name='facebookHandle' id='facebookHandle' />
                                
                                </div>
                        
                                <div className={`${style.text}`}>
                                
                                    <label htmlFor="facebookHandle">add your facebook name</label>
                                
                                </div>
                            
                        </div>
                    
                    </div>
                
                    <div className={`${style.socialProfile} mx-3 my-5 d-flex justify-content-between align-items-center `}>
                    
                        <div className={`${style.left}`}>
                        
                            <h6 className={`${style.userName}`}>instagram</h6>
                        
                        </div>
                    
                        <div className={`w-50 ${style.right}`}>
                            
                                <div className={`border d-flex align-items-baseline gap-2 p-1 ${style.iconInput}`}>
                                
                                    <i className="fa-brands fa-instagram"></i>
                                
                                    <input type="text" className='form-control w-100 outline-0 border-0 shadow-none' placeholder='instagram profile handle' name='instagramHandle' id='instagramHandle' />
                                
                                </div>
                        
                                <div className={`${style.text}`}>
                                
                                    <label htmlFor="instagramHandle">add your instagram name</label>
                                
                                </div>
                            
                        </div>
                    
                    </div>
                
                    <div className={`${style.socialProfile} mx-3 my-5 d-flex justify-content-between align-items-center `}>
                    
                        <div className={`${style.left}`}>
                        
                            <h6 className={`${style.userName}`}>linkedIn</h6>
                        
                        </div>
                    
                        <div className={`w-50 ${style.right}`}>
                            
                                <div className={`border d-flex align-items-baseline gap-2 p-1 ${style.iconInput}`}>
                                
                                    <i className="fa-brands fa-linkedin-in"></i>
                                
                                    <input type="text" className='form-control w-100 outline-0 border-0 shadow-none' placeholder='linkedIn profile handle' name='linkedInHandle' id='linkedInHandle' />
                                
                                </div>
                        
                                <div className={`${style.text}`}>
                                
                                    <label htmlFor="linkedInHandle">add your linkedIn name</label>
                                
                                </div>
                            
                        </div>
                    
                    </div>
                
                    <div className={`${style.socialProfile} mx-3 my-5 d-flex justify-content-between align-items-center `}>
                    
                        <div className={`${style.left}`}>
                        
                            <h6 className={`${style.userName}`}>youtube</h6>
                        
                        </div>
                    
                        <div className={`w-50 ${style.right}`}>
                            
                                <div className={`border d-flex align-items-baseline gap-2 p-1 ${style.iconInput}`}>
                                
                                    <i className="fa-brands fa-youtube"></i>
                                
                                    <input type="text" className='form-control w-100 outline-0 border-0 shadow-none' placeholder='youtube profile handle' name='youtubeHandle' id='youtubeHandle' />
                                
                                </div>
                        
                                <div className={`${style.text}`}>
                                
                                    <label htmlFor="youtubeHandle">add your youtube name</label>
                                
                                </div>
                            
                        </div>
                    
                    </div>
                
                    <div className="saveChanges m-3">
                    
                        <button className='btn btn-success text-capitalize'>save profile changes</button>
                    
                    </div>
                
                </div>
            
            </div>
        
        </div>
    )
}
