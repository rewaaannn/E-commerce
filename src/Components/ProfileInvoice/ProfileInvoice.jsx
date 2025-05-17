import React from 'react'
import style from '../ProfileAccount/ProfileAccount.module.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo3-removebg-preview.png'

export default function ProfileInvoice() {

    let userData;

    if(window.localStorage.getItem("data") == null) {
        userData = [];
        
    } else {
        userData = JSON.parse(window.localStorage.getItem("data"));
    }

    return (
        <div className='my-5 overflow-hidden'>
        
            <div className={`card ${style.card} bg-light`}>
            
                <div className="logoBg bg-dark p-2 rounded">
                
                    <Link to=''><img src={logo} width={100} alt="" /></Link>
                
                </div>
            
                <div className="row">
                
                    <div className="col-md-7">
                    
                        <div className="detailsBox p-3">
                            
                            <h4 className={`${style.userName} text-capitalize mb-4`}>invoice details:</h4>
                            
                            <div className="d-flex align-items-baseline mb-3">
                            
                                <span className={`${style.invoiceDetails}`}>invoice no: </span>
                            
                                <span className={`${style.invoiceInfo}`}>inside564865</span>
                            
                            </div>
                            
                            <div className="d-flex align-items-baseline mb-3">
                            
                                <span className={`${style.invoiceDetails}`}>name: </span>
                            
                                <span className={`${style.invoiceInfo}`}>{userData.user.userName}</span>
                            
                            </div>
                        
                            <div className="d-flex align-items-baseline mb-3">
                            
                                <span className={`${style.invoiceDetails}`}>address: </span>
                            
                                <span className={`${style.invoiceInfo} `}>{userData.user.userAddress}</span>
                            
                            </div>
                        
                            <div className="d-flex align-items-baseline mb-3">
                            
                                <span className={`${style.invoiceDetails}`}>phone: </span>
                            
                                <span className={`${style.invoiceInfo}`}>+125 8967 404</span>
                            
                            </div>
                            
                        </div>
                    
                    </div>
                
                    <div className="col-md-5">
                    
                        <div className="detailsBox p-3">
                        
                            <div className="d-flex align-items-baseline mb-3">
                            
                                <span className={`${style.invoiceDetails}`}>date: </span>
                            
                                <span className={`${style.invoiceInfo}`}>15th Oct, 2023</span>

                            </div>
                        
                        </div>
                    
                    </div>
                
                </div>
            
                <div className='p-3  overflow-x-scroll'>
                
                    <table className='table table-hover'>
                
                        <thead className='table-info'>
                        
                            <tr>
                            
                                <th className={` ${style.headCol}`}>no</th>
                            
                                <th className={` ${style.headCol}`}>items</th>
                            
                                <th className={` ${style.headCol}`}>qty</th>
                            
                                <th className={` ${style.headCol}`}>rate($)</th>
                            
                                <th className={` ${style.headCol}`}>total($)</th>
                            
                            </tr>
                        
                        </thead>
                    
                        <tbody>
                        
                            <tr>
                            
                                <td className={`${style.tableRowInvoiceNum} text-secondary`}>1</td>
                            
                                <td className={`${style.tableRowDate} text-black`}>plastic chair</td>
                            
                                <td className={`${style.status} text-secondary`}>1</td>
                            
                                <td className={`${style.tableSalary}`}>20</td>
                            
                                <td className={`${style.tableRowViewBtn}`}>$ 20</td>
                            
                            </tr>
                        
                            <tr>
                            
                                <td className={`${style.tableRowInvoiceNum} text-secondary`}>2</td>
                            
                                <td className={`${style.tableRowDate} text-black`}>white t-shirt</td>
                            
                                <td className={` ${style.status} text-secondary`}>2</td>
                            
                                <td className={`${style.tableSalary}`}>30</td>
                            
                                <td className={`${style.tableRowViewBtn}`}>$ 60</td>
                            
                            </tr>
                        
                            <tr>
                            
                                <td className={`${style.tableRowInvoiceNum} text-secondary`}>3</td>
                            
                                <td className={`${style.tableRowDate} text-black`}>laptop</td>
                            
                                <td className={` ${style.status} text-secondary`}>1</td>
                            
                                <td className={`${style.tableSalary}`}>500</td>
                            
                                <td className={`${style.tableRowViewBtn}`}>$ 500</td>
                            
                            </tr>
                        
                        </tbody>
        
                    </table>
                
                </div>
            
                <div className="row p-3">
                
                    <div className="col-md-7">
                    
                    
                    </div>
                
                    <div className="col-md-5">
                    
                        <div className="detailsBox border-bottom">
                            
                            <div className="d-flex align-items-baseline mb-3">
                            
                                <span className={`${style.invoiceDetails}`}>subtotal: </span>
                            
                                <span className={`${style.invoiceInfo}`}>$ 580</span>

                            </div>
                        
                            <div className="d-flex align-items-baseline mb-3">
                            
                                <span className={`${style.invoiceDetails}`}>taxes: </span>
                            
                                <span className={`${style.invoiceInfo}`}>$ 20</span>

                            </div>
                        
                            <div className="d-flex align-items-baseline mb-3">
                            
                                <span className={`${style.invoiceDetails}`}>total: </span>
                            
                                <span className={`${style.invoiceInfo}`}>$ 600</span>

                            </div>  
                        
                        </div>
                    
                    </div>
                
                </div>
            
                <div className={`${style.invoiceFooter} p-3`}>
                
                    <div className="d-md-flex justify-content-between align-items-baseline text-center">
                    
                        <div className="left">
                        
                            <h6 className={`${style.customerService}`}>customer services: <Link className={`text-danger`}> +11 568 4523 870 </Link></h6>
                        
                        </div>
                    
                        <div className="right">
                        
                            <Link className={`text-danger`}>terms & conditions</Link>
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </div>
        
        </div>
    )
}
