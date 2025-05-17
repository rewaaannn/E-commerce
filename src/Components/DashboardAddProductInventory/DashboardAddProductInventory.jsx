import React, { useState } from 'react'
import layout from '../Style/Layout/Layout.module.css'

export default function DashboardAddProductInventory() {

    const [selectedDate, setSelectedDate] = useState(() => new Date());

    const [selectedDate2, setSelectedDate2] = useState( () => new Date() );

    const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate());

    const tomorrow2 = new Date();
        tomorrow2.setDate(tomorrow2.getDate() + 1);

    return (
        <div className={`${layout.showItems}`}>
        
            <div className={`${layout.general}`}>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                
                    <div className={`${layout.label}`}>
                    
                        <label htmlFor="productName">SKU <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="input w-75">
                    
                        <input type="text" className={`form-control py-2`} placeholder='enter SKU' />
                    
                    </div>
                
                </div>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                
                    <div className={`${layout.label}`}>
                    
                        <label htmlFor="productName">stock quantity <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="input w-75">
                    
                        <input type='number' className={`form-control py-2`}  placeholder='enter quantity' rows='20' />
                    
                    </div>
                
                </div>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                
                    <div className={`${layout.label}`}>
                    
                        <label htmlFor="productName">price <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="input w-75">
                    
                        <div className="d-flex">
                        
                            <h4 className={`rounded-start-2 rounded-end-0 ${layout.dollarSign}`}>$</h4>
                        
                            <input type="number" className='form-control py-2 rounded-end-2 rounded-start-0' placeholder='enter price' required />
                        
                        </div>
                    
                    </div>
                
                </div>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                
                    <div className={`${layout.label}`}>
                    
                        <label htmlFor="productName">sale price</label>
                    
                    </div>
                
                    <div className="input w-75">
                    
                        <div className="d-flex">
                        
                            <h4 className={`rounded-start-2 rounded-end-0 ${layout.dollarSign}`}>$</h4>
                        
                            <input type="number" className='form-control py-2 rounded-end-2 rounded-start-0' placeholder='0.00' required />
                        
                        </div>
                    
                    </div>
                
                </div>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                
                    <div className={`${layout.label}`}>
                    
                        <label htmlFor="productName">discount </label>
                    
                    </div>
                
                    <div className="input w-75">
                    
                        <div className="d-flex">
                        
                            <input type="number" className='form-control py-2 rounded-end-0 rounded-start-2' placeholder='enter discount' required />
                        
                            <h4 className={`rounded-start-0 rounded-end-2 ${layout.dollarSign}`}>%</h4>
                        
                        </div>
                    
                    </div>
                
                </div>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                
                    <div className={`${layout.label}`}>

                        <label>sale status</label>
                    
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
                    
                        <label htmlFor="productName">start date</label>
                    
                    </div>
                
                    <div className="input w-75">
                    
                        <input type="date" className='form-control py-2' min={tomorrow.toISOString().substring(0, 10)} value={selectedDate.toISOString().substring(0, 10)} onChange={(event) => setSelectedDate(new Date(event.target.value))} />
                    
                    </div>
                
                </div>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                
                    <div className={`${layout.label}`}>
                    
                        <label htmlFor="productName">end date</label>
                    
                    </div>
                
                    <div className="input w-75">
                    
                    <input type="date" className='form-control py-2' min={tomorrow2.toISOString().substring(0, 10)} value={tomorrow2.toISOString().substring(0, 10)} onChange={(event) => setSelectedDate2(new Date(event.target.value))} />
                    
                    </div>
                
                </div>
            
            </div>
        
        </div>
    )
}
