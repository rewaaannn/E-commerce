import React from 'react'
import style from '../ProfileAccount/ProfileAccount.module.css'
import { Link } from 'react-router-dom'

export default function Visa() {
    return (
        <div className='my-5'>
        
            <div className={`card ${style.card}`}>
            
                <div className="d-flex">
                
                    <h4 className={`${style.title}`}>card information</h4>
                
                    <button className='btn btn-danger'>add new card</button>

                </div>
            
                
            
            </div>
        
        </div>
    )
}
