import React, { useState } from 'react'
import layout from '../Style/Layout/Layout.module.css'
import { Link, useNavigate } from 'react-router-dom'

export default function DashboardAddStore() {

    let navigate  = useNavigate()

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
        <div className={` ${layout.box}`}>
        
            <div className={`${layout.title}`}>
            
                <h3>add store</h3>
            
            </div>
        
            <div className="container">
            
                <div className="inputs">
                
                    <div className="row align-items-center mb-3">
                    
                        <div className="col-2">
                        
                            <div className={`${layout.inputTitle}`}>
                            
                                <h4>store logo</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-10">
                        
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
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                            
                                <h4>store name</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                            
                                <input required type="text" className='form-control py-2' placeholder='enter name' />
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                            
                                <h4>store description</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                            
                                <textarea className='form-control py-2' name="" id="" placeholder='enter description'></textarea>
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                            
                                <h4>country</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                            
                                <select className='form-control form-select py-2' name="" id="">
                                
                                    <option selected>select</option>
                                
                                    <option value="Egypt">Egypt</option>
                                
                                    <option value="USA">USA</option>
                                
                                </select>
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                            
                                <h4>city</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                            
                                <select className='form-control form-select py-2' name="" id="">
                                
                                    <option selected>select</option>
                                
                                    <option value="Egypt">Cairo</option>
                                
                                    <option value="USA">Los Angelos</option>
                                
                                </select>
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                            
                                <h4>address</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                            
                                <input required type="text" className='form-control py-2' placeholder='enter address' />
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                            
                                <h4>pin code</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                            
                                <input required type="text" className='form-control py-2' placeholder='enter pin code' />
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                            
                                <h4>name</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                            
                                <input required type="text" className='form-control py-2' placeholder='enter name' />
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                            
                                <h4>email</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                            
                                <input required type="email" className='form-control py-2' placeholder='enter email' />
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                            
                                <h4>phone number</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                            
                                <input required type="number" className='form-control py-2' placeholder='enter phone number' />
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                            
                                <h4>password</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                            
                                <input required type="password" className='form-control py-2' placeholder='enter password' />
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                            
                                <h4>confirm password</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                            
                                <input required type="password" className='form-control py-2' placeholder='confirm password' />
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                        
                                <h4>facebook url</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                        
                                <input required type="text" className='form-control py-2' placeholder='enter facebook url' />
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                        
                                <h4>instagram url</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                        
                                <input required type="text" className='form-control py-2' placeholder='enter instagram url' />
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                        
                                <h4>twitter url</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                        
                                <input required type="text" className='form-control py-2' placeholder='enter twitter url' />
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                        
                                <h4>pinterest url</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                        
                                <input required type="text" className='form-control py-2' placeholder='enter pinterest url' />
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                        
                                <h4>hide email</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                        
                                <label className={`${layout.switch}`}>
                                
                                    <input required type="checkbox" />
                                
                                    <span className={`${layout.slider}`}></span>
                                
                                </label>
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                    <div className="row align-items-baseline mb-3">
                    
                        <div className="col-sm-2">
                        
                            <div className={`${layout.inputTitle}`}>
                        
                                <h4>hide phone</h4>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-10">
                        
                            <div className={`${layout.rightInput} ${layout.input} w-100`}>
                        
                                <label className={`${layout.switch}`}>
                                
                                    <input required type="checkbox" />
                                
                                    <span className={`${layout.slider}`}></span>
                                
                                </label>
                            
                            </div>
                        
                        </div>
                
                    </div>
                
                </div>
            
            </div>
        
            <div className={`d-flex justify-content-end align-items-center gap-3 ${layout.btns}`}>
                
                <button onClick={ () => { navigate(-1) } } className={`btn btn-outline-success ${layout.backBtn}`}>back</button>
            
                <button className={`btn btn-success ${layout.saveBtn}`}>save</button>
            
            </div>
        
        </div>
    )
}
