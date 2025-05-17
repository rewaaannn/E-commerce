import React, { useState } from 'react'
import layout from '../Style/Layout/Layout.module.css'

export default function DashboardAddProductImages() {

    const [thumbnail, setThumbnail] = useState(null)

    const [image, setImage] = useState(null)

    const [sizeChart, setSizeChart] = useState(null)

    const onThumbnailChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setThumbnail(URL.createObjectURL(event.target.files[0]));
        }
    }

    const onCloseThumbnail = () => {
        setThumbnail(null)
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const onCLoseImage = () => {
        setImage(null)
    }

    const onSizeChartChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSizeChart(URL.createObjectURL(event.target.files[0]));
        }
    }

    const onCLoseSizeChart = () => {
        setSizeChart(null)
    }

    return (
        <div className={`${layout.showItems}`}>
        
            <div className={`${layout.setup}`}>
            
                <div className="row align-items-center mb-3">
                        
                        <div className="col-4">
                        
                            <div className={`${layout.inputTitle}`}>
                            
                                <h4>thumbnail</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-8">
                        
                            <div className={` ${layout.rightInput}`}>
                            
                                <div className='d-flex gap-4'>
                                
                                    <div className={`${layout.uploadImage}`}>
                                    
                                        <input required type="file" onChange={onThumbnailChange} name='storeLogo' id='StoreLogo' />
                                    
                                        <i className="fa-solid fa-plus"></i>
                                    
                                    </div>
                            
                                    { thumbnail ? <div className={`p-2 ${layout.uploadImage}`}>
                                    
                                    <i onClick={onCloseThumbnail} className={`fa-solid fa-rectangle-xmark ${layout.close}`}></i>
                                
                                    <img src={thumbnail}  alt="" />
                                
                                </div> : '' }
                            
                                </div>
                            
                                <p>*upload image size 500px500px recommended</p>
                            
                            </div>
                        
                        </div>
                    
                </div>
            
                <div className="row align-items-center mb-3">
                        
                        <div className="col-4">
                        
                            <div className={`${layout.inputTitle}`}>
                            
                                <h4>image <span style={{color: `red`}}>*</span></h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-8">
                        
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
                            
                                <p>*upload image size 500px500px recommended</p>
                            
                            </div>
                        
                        </div>
                    
                </div>
            
                <div className="row align-items-center mb-3">
                        
                        <div className="col-4">
                        
                            <div className={`${layout.inputTitle}`}>
                            
                                <h4>sizeChart </h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-8">
                        
                            <div className={` ${layout.rightInput}`}>
                            
                                <div className='d-flex gap-4'>
                                
                                    <div className={`${layout.uploadImage}`}>
                                    
                                        <input required type="file" onChange={onSizeChartChange} name='storeLogo' id='StoreLogo' />
                                    
                                        <i className="fa-solid fa-plus"></i>
                                    
                                    </div>
                            
                                    { sizeChart ? <div className={`p-2 ${layout.uploadImage}`}>
                                    
                                    <i onClick={onCLoseSizeChart} className={`fa-solid fa-rectangle-xmark ${layout.close}`}></i>
                                
                                    <img src={sizeChart}  alt="" />
                                
                                </div> : '' }
                            
                                </div>
                            
                                <p>*Upload an image showcasing the size chart tailored for fashion products. A table format image is suggested for easy reference.</p>
                            
                            </div>
                        
                        </div>
                    
                </div>
            
            </div>
        
        </div>
    )
}
