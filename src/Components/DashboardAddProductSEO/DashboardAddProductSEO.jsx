import React, { useState } from 'react'
import layout from '../Style/Layout/Layout.module.css'

export default function DashboardAddProductSEO() {

    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const onCLoseImage = () => {
        setImage(null)
    }

    return (
        <div className={`${layout.showItems}`}>
        
            <div className={`${layout.general}`}>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                    
                    <div className={`${layout.label}`}>
                    
                        <label htmlFor="productName">meta title: <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="input w-75">
                    
                        <input type="text" className={`form-control py-2`} placeholder='enter product name' />
                    
                    </div>
                
                </div>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                
                    <div className={`${layout.label}`}>
                    
                        <label htmlFor="productName">meta description: <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="input w-75">
                    
                        <textarea className={`toolbar form-control py-2`}  placeholder='enter product description' rows='10' />
                    
                    </div>
                
                </div>
            
                <div className="row align-items-center mb-3">
                        
                        <div className="col-3">
                        
                            <div className={`${layout.inputTitle}`}>
                            
                                <h4>product meta image <span style={{color: `red`}}>*</span></h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-9">
                        
                            <div className={` ${layout.rightInput}`}>
                            
                                <div className='d-flex gap-4'>
                                
                                    <div className={`${layout.uploadImage}`}>
                                    
                                        <input required type="file" onChange={onImageChange} name='storeLogo' id='StoreLogo' />
                                    
                                        <i className="fa-solid fa-plus"></i>
                                    
                                    </div>
                            
                                    { image ? <div className={`p-2 ${layout.uploadImage}`}>
                                    
                                    <i onClick={onCLoseImage} className={`fa-solid fa-rectangle-xmark ${layout.close}`}></i>
                                
                                    <img src={image}  alt="" />
                                
                                    </div> : '' }
                            
                                </div>
                            
                            </div>
                        
                        </div>
                    
                </div>
            
            </div>
        
        </div>
    )
}
