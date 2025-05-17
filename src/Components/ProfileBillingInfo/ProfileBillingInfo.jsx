import React from 'react'
import style from '../ProfileAccount/ProfileAccount.module.css'
import { Link } from 'react-router-dom'

export default function ProfileBillingInfo() {

    let userData;

    if(window.localStorage.getItem("data") == null) {
        userData = [];
        
    } else {
        userData = JSON.parse(window.localStorage.getItem("data"));
    }

    return (
        <div className={`card p-3 mt-5 ${style.card}`}>
        
            <p className={`mt-2 ${style.description}`}>the following addresses will be used on the checkout page by default.</p>
        
            <div className="d-flex justify-content-between align-items-baseline w-50 border-bottom">
            
                <h4 className={`mt-3 ${style.title}`}>billing address: </h4>
            
                <Link to=''><i className="fa-regular fa-pen-to-square text-success"></i></Link>
            
            </div>
        
            <div className="info mt-3">
            
                <h5 className={`mb-3 ${style.userName2}`}>{userData.user.userName}</h5>
            
                <p className={` ${style.location}`}><i className="fa-solid fa-location-dot"></i> {userData.user.userAddress} </p>
            
                <p className={` ${style.phoneNumber}`}><i className="fa-solid fa-phone"></i> +125 8967 404</p>
            
            </div>
        
        </div>
    )
}
