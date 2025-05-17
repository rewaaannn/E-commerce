import React from 'react'
import layout from '../Style/Layout/Layout.module.css'

export default function DashboardAddProductStatus() {
    return (
        <div className={`${layout.showItems}`}>
        
            <div className={`${layout.general}`}>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                    
                    <div className={`${layout.label}`}>

                        <label>featured</label>
                    
                    </div>
                    
                    <div className={`w-75 ${layout.rightInput} ${layout.input}`}>

                        <label className={`${layout.switch}`}>
                        
                            <input required type="checkbox" />
                        
                            <span className={`${layout.slider}`}></span>
                        
                        </label>
                    
                        <p className={`${layout.paragraphDescription}`}>*Enabling this option will display a Featured tag on the product.</p>
                    
                    </div>
            
                </div>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                
                    <div className={`${layout.label}`}>

                        <label>return</label>
                    
                    </div>
                    
                    <div className={`w-75 ${layout.rightInput} ${layout.input}`}>

                        <label className={`${layout.switch}`}>
                        
                            <input required type="checkbox" />
                        
                            <span className={`${layout.slider}`}></span>
                        
                        </label>
                    
                        <p className={`${layout.paragraphDescription}`}>*Enable to make the product eligible for returns.</p>
                    
                    </div>
            
                </div>
            
            </div>
        
        </div>
    )
}
