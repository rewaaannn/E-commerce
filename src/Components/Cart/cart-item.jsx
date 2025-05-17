import React, {useContext, useState} from 'react'
import Products from '../Shop/Products';
import style from '../Shop/Products.module.css'
import { ShopContext } from '../../context/shop-context';


export const CartItem = (props) => {
    const { id, title, price, image, description,quntity,totalPrice} =props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

  
    return (
       
      <div>
       
        <div className="py-1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className='table tablt-bordered'>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th className='text-center'>Product</th>
                                        <th className='text-center'>Price</th>
                                        <th className='text-center'>Quntity</th>
                                        <th className='text-center'>Total Price</th>
                                        <th className='text-center'>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td width='15%'>
                                        <img src={image} alt='' width='75px' height='75px' />
                                    </td>
                                    <td className='text-center'>{id}</td>
                                    <td width='20%' className='text-center'>${price}</td>
                                    <td className='text-center' width='15%'>
                                        <div className="text-center">
                                        <button type='button' className='btn btn-outline-success text-white-color-dark  ' onClick={() =>removeFromCart(id)}>-</button>
                                     <input className={` ${style.quntity}   text-center `} value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value),id)} />
                                     <button type='button' className='btn btn-outline-success text-white-color-dark' onClick={() => addToCart(id)}>+</button>

                                     </div>
                                    </td>
                                    <td width='15%' className='text-center'>{price * cartItems[id] } </td>
                                   <td width='10%'>
                                    <button  type='button' className='btn btn-outline-success text-white-color-dark me-3' onClick={() =>removeFromCart(id)}>Remove</button>
                                   </td>
                                  </tr>
                                </tbody>
                            </table>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    )
}


export default CartItem ;


