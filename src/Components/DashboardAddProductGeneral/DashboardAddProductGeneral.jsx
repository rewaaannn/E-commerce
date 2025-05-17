import React, { useEffect, useRef, useState } from 'react'
import layout from '../Style/Layout/Layout.module.css'

export default function DashboardAddUserGeneral() {

    const [openMenu, setOpenMenu] = useState(false)

    let menuRef = useRef()
    
    useEffect(() => {
        
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpenMenu(false);
            }
        }
        
        document.addEventListener('mousedown', handler)
        
        return() => {
            document.removeEventListener('mousedown', handler);
        }
        
    });

    return (
        <div className={`${layout.showItems}`}>
        
            <div className={`${layout.general}`}>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                
                    <div className={`${layout.label}`}>
                    
                        <label htmlFor="productName">name: <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="input w-75">
                    
                        <input type="text" className={`form-control py-2`} placeholder='enter product name' />
                    
                    </div>
                
                </div>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                
                    <div className={`${layout.label}`}>
                    
                        <label htmlFor="productName">description: <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="input w-75">
                    
                        <textarea className={`toolbar form-control py-2`}  placeholder='enter product description' rows='10' />
                    
                    </div>
                
                </div>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                
                    <div className={`${layout.label}`}>
                    
                        <label htmlFor="productName">store: <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="input w-75">
                    
                        <select name="store" id="store" className={`form-select py-2 bg-white ${layout.store}`}>
                        
                            <option selected>select</option>
                        
                            <option value="clothes">fashions</option>
                        
                            <option value="watches">watches</option>
                        
                            <option value="watches">electronics</option>
                        
                            <option value="watches">sports</option>
                        
                            <option value="watches">furniture</option>
                        
                            <option value="watches">accessories</option>
                        
                            <option value="watches">furnishing</option>
                        
                        </select>
                    
                    </div>
                
                </div>
            
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                
                    <div className={`${layout.label}`}>
                    
                        <label htmlFor="productName">catagories <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="input w-75 form-control py-2 position-relative" ref={menuRef}>
                    
                        <p onClick={ () => {setOpenMenu(!openMenu)} }  className={`mb-0 ${layout.showMore}`}>select <i class="fa-solid fa-chevron-down"></i></p>
                    
                        <div className={`${layout.showCatagories} ${openMenu ? ` ${layout.showCatagoriesActive} `: ` ${layout.showCatagoriesInactive} ` }`}>
                        
                            <div className={`${layout.selectHeader}`}>
                            
                                <h4 className={`${layout.disableTitle}`}>all</h4>
                            
                                <button><i class="fa-solid fa-xmark"></i></button>
                            
                            </div>
                        
                            <ul>
                            
                                <div className={`${layout.select}`}>
                                
                                    <h4 className={`${layout.category}`}>fashions</h4>
                                
                                    <button className='btn btn-outline-success'>select</button>
                                
                                </div>
                        
                                <div className={`${layout.select}`}>
                                
                                    <h4 className={`${layout.category}`}>watches</h4>
                                
                                    <button className='btn btn-outline-success'>select</button>
                                
                                </div>
                        
                                <div className={`${layout.select}`}>
                                
                                    <h4 className={`${layout.category}`}>electronics</h4>
                                
                                    <button className='btn btn-outline-success'>select</button>
                                
                                </div>
                            
                                <div className={`${layout.select}`}>
                                
                                    <h4 className={`${layout.category}`}>sports</h4>
                                
                                    <button className='btn btn-outline-success'>select</button>
                                
                                </div>
                            
                                <div className={`${layout.select}`}>
                                
                                    <h4 className={`${layout.category}`}>furniture</h4>
                                
                                    <button className='btn btn-outline-success'>select</button>
                                
                                </div>
                            
                                <div className={`${layout.select}`}>
                                
                                    <h4 className={`${layout.category}`}>accessories</h4>
                                
                                    <button className='btn btn-outline-success'>select</button>
                                
                                </div>
                            
                                <div className={`${layout.select}`}>
                                
                                    <h4 className={`${layout.category}`}>furnishing</h4>
                                
                                    <button className='btn btn-outline-success'>select</button>
                                
                                </div>
                            
                            </ul>
                        
                        </div>
                    
                    </div>
            
                </div>
        
                <div className={`d-flex justify-content-between align-items-center ${layout.input}`}>
                
                    <div className={`${layout.label}`}>

                        <label>random related product</label>
                    
                    </div>
                    
                    <div className={`w-75 ${layout.rightInput} ${layout.input}`}>

                        <label className={`${layout.switch}`}>
                        
                            <input required type="checkbox" />
                        
                            <span className={`${layout.slider}`}></span>
                        
                        </label>
                    
                        <p className={`${layout.paragraphDescription}`}>*Enabling this option allows to randomly select 6 products for display.</p>
                    
                    </div>
            
                </div>
            
            </div>
        
        </div>
    )
}
