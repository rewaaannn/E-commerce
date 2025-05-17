import React from 'react'
import style from '../ProfileAccount/ProfileAccount.module.css'
import { Link } from 'react-router-dom'
import visa1 from '../../images/visa.jfif'
import masterCard from '../../images/master-card.jfif'
import payPal from '../../images/payPal.jfif'
import visaNetwrok from '../../images/visa-discover-network.jfif'

export default function ProfilePayment() {

    const visas = [
    
        {
            id: 1,
            image: visa1,
            title: 'visa ending in 4785',
            description: 'expires in 13/03/2024'
        
        },
    
        {
            id: 2,
            image: masterCard,
            title: 'visa ending in 4785',
            description: 'expires in 22/05/2024'
        
        },
    
        {
            id: 3,
            image: payPal,
            title: 'visa ending in 4785',
            description: 'expires in 7/06/2024'
        
        },
    
        {
            id: 4,
            image: visaNetwrok,
            title: 'visa ending in 4785',
            description: 'expires in 20/07/2024'
        
        },
    
    ]


    return (
        <div className={`mt-5 mb-5`}>
        
            <div className={`card ${style.card}`}>
            
                <div className="d-flex py-3 align-items-baseline justify-content-between border-bottom">
                
                    <h4 className={`m-3 ${style.title}`}>current plan</h4>
                
                    <Link className={`m-3 btn btn-success text-capitalize`} to=''>switch to annual plan</Link>
                
                </div>
            
                <div className="info">
                
                    <h4 className={`m-3 mt-4 ${style.userName}`}>$18/Monthly</h4>
                
                    <p className={`m-3 ${style.description}`}>Your next monthly charge of $18 will be applied to your primary payment method on July 20, 2022.</p>
                
                </div>
            
            </div>
        
            <div className={`card mt-4 ${style.card}`}>
            
                <div className=" py-3 border-bottom">
                
                    <h4 className={`m-3 ${style.title}`}>payment methods</h4>
                
                    <p className={`m-3 ${style.description}`}>primary payment method is used by default</p>
                
                </div>
            
                <div className={`px-4 py-3 ${style.visaTypes}`}>
                
                    {visas.map((visa) => {
                    
                        return (
                        
                        <div className={` ${style.visa} mb-3 border-bottom d-flex justify-content-between align-items-baseline`}>
                
                            <div className="mb-3 left d-flex align-items-center justify-content-between gap-3 ">
                            
                                <div className="image">
                                
                                    <img src={visa.image} width={48} height={`auto`} alt="" />
                                
                                </div>
                            
                                <div className="text">
                                
                                    <h5 className={`${style.tableRowInvoiceNum}`}>{visa.title}</h5>
                                
                                    <p className={`${style.description}`}>{visa.description}</p>
                                
                                </div>
                            
                            </div>
                        
                            <div className="p-4 right">
                            
                                <Link className={`${style.deleteVisa}`}><i className="fa-regular fa-trash-can"></i></Link>
                            
                            </div>
            
                        </div>
                    
                        )
                    
                    } )}
                
                    <button className='m-3 btn btn-success text-capitalize'>add payment method</button>
                
                    
                
                </div>
            
            </div>
        
        </div>
    )
}
