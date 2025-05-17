import React, {useContext, useState, useEffect} from 'react'
import { ShopContext } from '../../context/shop-context'
import Products from '../Shop/Products';
import {CartItem} from './cart-item'
import { NavLink } from 'react-router-dom';
import Shop from '../Shop/Shop';
import style from '../Shop/Products.module.css'


 export const ShoppingCart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()
    const [cart, setCart] = useState(Products);
   
    let componentMounted = true;

    useEffect(() => {
        const getShopppingCart = async () => {
            const response = await fetch('{Products}');
            if (componentMounted) {
                setCart(await response.json());
                console.log(cart)
            }

            return () => {
                componentMounted = false;
            }
        }

        getShopppingCart();

    }, []);
    

    return(
        <div className=''>
            <section className={`${style.backgroundTitle}`}>

                <h3>Shopping cart</h3>

            </section>
        
          <div className={` py-4 ${style.introBgg} pb-5`}></div>
          <div className='display-6 fw text-center py-3 '>
            <p>Shopping Cart</p>
          </div>
            
                {cart.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product}/>;
                    } 
                })}
            {totalAmount > 0 ?
           
            <div className='cheackout text-center py-5'>
         <h5>Subtotal: ${totalAmount} </h5>
         <NavLink to='../Shop' className="btn btn-outline-success text-white-color-dark me-3 " >Continue Shopping</NavLink>
         <NavLink to='../Checkout' className="btn btn-outline-success text-white-color-dark me-3">Checkout</NavLink>
        </div>
        :<h3 className='text-center py-5 card card-body shadow-sm'> Your Shopping Cart is Empty </h3>}
        </div>
        
 )
};

   
export default ShoppingCart;