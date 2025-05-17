import React from 'react'
// import style from './DashboardAddProduct.module.css'
import layout from '../Style/Layout/Layout.module.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function DashboardAddProduct() {

    let navigate = useNavigate()

    return (
        <div className={`${layout.box}`}>
        
            <div className={`${layout.title}`}>
            
                <h4>add product</h4>
            
            </div>
        
            <div className="container">
            
                <div className="row justify-content-evenly">
            
                    <div className="col-lg-4">
                    
                        <ul className={`${layout.listMenu} mb-3 pb-2`}>
                
                            <li>
                            
                                <NavLink to='general' className={({isActive}) => { return ( ` ${layout.link} ` + (isActive ? ` ${layout.linkActive} `: `  ` ) ) } }><i className="fa-solid fa-gears"></i>general</NavLink>
                            
                            </li>
                        
                            <li>
                            
                                <NavLink to='inventory' className={({isActive}) => { return ( ` ${layout.link} ` + (isActive ? ` ${layout.linkActive} `: `  ` ) ) } }><i className="fa-solid fa-warehouse"></i>inventory</NavLink>
                            
                            </li>
                        
                            {/* <li>
                            
                                <NavLink to='setup' className={({isActive}) => { return ( ` ${layout.link} ` + (isActive ? ` ${layout.linkActive} `: `  ` ) ) } }><i className="fa-solid fa-screwdriver-wrench"></i>setup</NavLink>
                            
                            </li> */}
                        
                            <li>
                            
                                <NavLink to='media' className={({isActive}) => { return ( ` ${layout.link} ` + (isActive ? ` ${layout.linkActive} `: `  ` ) ) } }><i className="fa-regular fa-image"></i>media</NavLink>
                            
                            </li>
                        
                            <li>
                            
                                <NavLink to='seo' className={({isActive}) => { return ( ` ${layout.link} ` + (isActive ? ` ${layout.linkActive} `: `  ` ) ) } }><i className="fa-solid fa-earth-americas"></i>SEO</NavLink>
                            
                            </li>
                        
                            <li>
                            
                                <NavLink to='shipping&tax' className={({isActive}) => { return ( ` ${layout.link} ` + (isActive ? ` ${layout.linkActive} `: `  ` ) ) } }><i className="fa-solid fa-truck-fast"></i>shipping & tax</NavLink>
                            
                            </li>
                        
                            <li>
                            
                                <NavLink to='status' className={({isActive}) => { return ( ` ${layout.link} ` + (isActive ? ` ${layout.linkActive} `: `  ` ) ) } }><i className="fa-solid fa-circle-check"></i>status</NavLink>
                            
                            </li>
                        
                        
                        </ul>
                    
                    </div>
                
                    <div className="col-lg-8">
                    
                        <Outlet></Outlet>
                    
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
