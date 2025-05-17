import React from 'react'
import style from '../ProfileAccount/ProfileAccount.module.css'
import {Link} from 'react-router-dom'

export default function AccountOrders() {
    return (
        <div className='my-5'>
        
            <div className={`p-3 ${style.card}`}>
            
                <h4 className={`${style.title}`}>my orders</h4>
            
                <table className='table table-hover'>
                
                    <thead className='table-info'>
                    
                        <tr>
                        
                            <th className={` ${style.headCol}`}>order no</th>
                        
                            <th className={` ${style.headCol}`}>date</th>
                        
                            <th className={` ${style.headCol}`}>status</th>
                        
                            <th className={` ${style.headCol}`}>total</th>
                        
                            <th className={` ${style.headCol}`}>action</th>
                        
                        </tr>
                    
                    </thead>
                
                    <tbody>
                    
                        <tr>
                        
                            <td className={`${style.tableRowInvoiceNum}`}>5049</td>
                        
                            <td className={`${style.tableRowDate}`}>6th may 2023</td>
                        
                            <td className={`${style.tableRowDelivered} ${style.status}`}>delivered</td>
                        
                            <td className={`${style.tableSalary}`}><span>$ 60</span> for 2 items</td>
                        
                            <td className={`${style.tableRowViewBtn}`}><Link to=''>view <i className="fa-solid fa-chevron-right"></i></Link></td>
                        
                        </tr>
                    
                        <tr>
                        
                            <td className={`${style.tableRowInvoiceNum}`}>6803</td>
                        
                            <td className={`${style.tableRowDate}`}>18th october 2023</td>
                        
                            <td className={`${style.tableRowProcessing} ${style.status}`}>processing</td>
                        
                            <td className={`${style.tableSalary}`}><span>$ 200</span> for 3 items</td>
                        
                            <td className={`${style.tableRowViewBtn}`}><Link to=''>view <i className="fa-solid fa-chevron-right"></i></Link></td>
                        
                        </tr>
                    
                        <tr>
                        
                            <td className={`${style.tableRowInvoiceNum}`}>8176</td>
                        
                            <td className={`${style.tableRowDate}`}>2th december 2023</td>
                        
                            <td className={`${style.tableRowCanceled} ${style.status}`}>canceled</td>
                        
                            <td className={`${style.tableSalary}`}><span>$ 100</span> for 1 items</td>
                        
                            <td className={`${style.tableRowViewBtn}`}><Link to=''>view <i className="fa-solid fa-chevron-right"></i></Link></td>
                        
                        </tr>
                    
                    </tbody>
                
                </table>
            
            </div>
        
        </div>
    )
}
