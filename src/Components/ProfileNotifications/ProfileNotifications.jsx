import React from 'react'
import style from './ProfileNotifications.module.css'

export default function ProfileNotifications() {
    return (
        <div className='my-5'>
        
            <div className={`card ${style.card}`}>
            
                <h4 className={`m-3 ${style.title}`}>marketing notifications: </h4>
            
                <div className={`border-top ${style.notifications}`}>
                
                    <div className={`m-3 py-3 d-flex justify-content-between align-items-center ${style.notification}`}>
                        
                        <div className={`${style.left}`}>
                        
                            <h6 className={`${style.userName}`}>there is a sale or promotion</h6>
                        
                        </div>
                    
                        <div className={`${style.right}`}>
                        
                            <input type="checkbox" className='text-success' />
                        
                        </div>
                    
                    </div>
                
                    <div className={`m-3 py-3 d-flex justify-content-between align-items-center ${style.notification}`}>
                    
                        <div className={`${style.left}`}>
                        
                            <h6 className={`${style.userName}`}>company news</h6>
                        
                        </div>
                    
                        <div className={`${style.right}`}>
                        
                            <input type="checkbox" className='text-success' />
                        
                        </div>
                    
                    </div>
                
                    <div className={`m-3 py-3 d-flex justify-content-between align-items-center ${style.notification}`}>
                    
                        <div className={`${style.left}`}>
                        
                            <h6 className={`${style.userName}`}>new product</h6>
                        
                        </div>
                    
                        <div className={`${style.right}`}>
                        
                            <input type="checkbox" className='text-success' />
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </div>
        
        </div>
    )
}
