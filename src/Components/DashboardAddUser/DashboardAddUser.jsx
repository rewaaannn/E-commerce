import React from 'react'
// import style from './DashboardAddUser.module.css'
import style from '../Style/Layout/Layout.module.css'
import { Link, useNavigate } from 'react-router-dom'

export default function DashboardAddUser() {

    let navigate = useNavigate()

    return (
        <div className={`${style.box}`}>
        
            <div className={`${style.title}`}>
            
                <h3>add user</h3>
            
            </div>
        
            <div className="container">
            
                <div className={`row ${style.input}`}>
                
                    <div className="col-sm-2">
                    
                        <label htmlFor="name">name <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="col-sm-10">
                    
                        <input type="text" className={`form-control py-2`} placeholder='enter user name' id='name' name='name' required />
                    
                    </div>
                
                </div>
    
                <div className={`row ${style.input}`}>
                
                    <div className="col-sm-2">
                    
                        <label htmlFor="email">email <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="col-sm-10">
                    
                        <input type="email" className={`form-control py-2`} placeholder='enter email' id='email' name='email' required />
                    
                    </div>

                </div>
    
                <div className={`row ${style.input}`}>
                
                    <div className="col-sm-2">
                    
                        <label htmlFor="phone">phone number <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="col-sm-10">
                    
                        <input type="number" className={`form-control py-2`} placeholder='enter phone number' id='phone' name='phone' required />
                    
                    </div>
                
                </div>
            
                <div className={`row ${style.input}`}>
                
                    <div className="col-sm-2">
                    
                        <label htmlFor="password">password <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="col-sm-10">
                    
                        <input type="password" className={`form-control py-2`} placeholder='enter password' id='password' name='password' required />
                    
                    </div>
                
                </div>
            
                <div className={`row ${style.input}`}>
                
                    <div className="col-sm-2">
                    
                        <label htmlFor="cPassword">confirm password <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="col-sm-10">
                    
                        <input type="password" className={`form-control py-2`} placeholder='confirm password' id='cPassword' name='cPassword' required />
                    
                    </div>
                
                </div>
            
                <div className={`row ${style.input}`}>
                
                    <div className="col-sm-2">
                    
                        <label htmlFor="phone">role <span style={{color: `red`}}>*</span></label>
                    
                    </div>
                
                    <div className="col-sm-10">
                    
                        <select name="user" id="user" className="form-select py-2">
                        
                            <option selected>select</option>
                            <option value="customer">customer</option>
                            <option value="admin">admin</option>
                        
                        </select>
                    
                    </div>
                
                </div>
            
                <div className={`d-flex justify-content-end align-items-center gap-3 ${style.btns}`}>
                
                    <button onClick={ () => { navigate(-1) } } className={`btn btn-outline-success ${style.backBtn}`}>back</button>
                
                    <button className={`btn btn-success ${style.saveBtn}`}>save</button>
                
                </div>
            
            </div>
        
        </div>
    )
}
