import React from 'react'
import layout from '../Style/Layout/Layout.module.css'

export default function DashboardAddProductShipping() {
    return (
        <div className={`${layout.showItems}`}>
        
            <div className={`${layout.general}`}>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                    
                    <div className={`${layout.label}`}>

                        <label>free shipping</label>
                    
                    </div>
                    
                    <div className={`w-75 ${layout.rightInput} ${layout.input}`}>

                        <label className={`${layout.switch}`}>
                        
                            <input required type="checkbox" />
                        
                            <span className={`${layout.slider}`}></span>
                        
                        </label>
                    
                    </div>
            
                </div>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                
                    <div className={`${layout.label}`}>
                    
                        <label htmlFor="productName">estimated delivery text <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="input w-75">
                    
                        <input type='text' className={`form-control py-2`}  placeholder='enter estimated delivery text' />
                    
                        <p className={`${layout.paragraphDescription}`}>*Specify delivery text e.g Your order is likely to reach you within 5 to 10 days.</p>
                    
                    </div>
                
                </div>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                
                    <div className={`${layout.label}`}>
                    
                        <label htmlFor="productName">return policy text <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="input w-75">
                    
                        <input type='text' className={`form-control py-2`}  placeholder='enter policy text' />
                    
                        <p className={`${layout.paragraphDescription}`}>*Specify return text e.g Hassle free 7, 15 and 30 days return might be available.</p>
                    
                    </div>
                
                </div>
            
            </div>
        
        </div>
    )
}
