import React from 'react'
import { useNavigate } from 'react-router-dom'
import pageNotFound from '../../images/404.webp'
import style from './NotFound.module.css'


export default function NotFound() {

    let navigate = useNavigate();

    return (
        <>
        
            <div className={`${style.error}`}>
            
                {/* <h3 style={{fontSize: `100px`, fontWeight: `900`, lineHeight: `.8`, color: `#aaa`, margin: `-11px 0 0`}}>Page not found</h3> */}
            
                <div className={`${style.image}`}>
                
                    <img src={pageNotFound} alt="" />
                
                </div>
            
                <div className='d-flex justify-content-center align-items-center'>
                
                    <p className='text-center w-75'>The page you are looking for could not be found. The link to this address may be outdated or we may have moved the since you last bookmarked it.</p>
                
                </div>
            
                <button onClick={ () => { navigate(-1) } } className='btn btn-success mt-5 text-capitalize text-white'>go back</button>
            
            </div>
        
        </>
    )
}
