import React, {useContext, useState, useEffect} from 'react'
import { countries } from 'countries-list'
import { ShopContext } from '../../context/shop-context'
import style from '../Shop/Products.module.css'
import Products from '../Shop/Products'



export const Checkout = (props) => {
    const { id, title, price, image, quntity,totalPrice} =props;
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()
    const cartItemAmount = cartItems[id];

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

    const countriesList = Object.values(countries)
    
    const[checkoutInput, setCheckoutIput]=useState({
      
      firstname:'',
      lasstname:'',
      phone:'',
      email:'',
      companyname:'',
      countryregion:'',
      address:'',
      city:'',
      state:'',
      zipcode:'',

   });
     
    const handleInput = (e) => {
        e.persist();
        setCheckoutIput({...checkoutInput, [e.target.name]: e.target.value });
    }

    const submitOrder = (e) => {
        e.preventDefault();
        const data ={
            firstname: checkoutInput.firstname,
            lasstname:checkoutInput.lasstname,
            phone:checkoutInput.phone,
            email:checkoutInput.email,
            companyname:checkoutInput.companyname,
            countryregion:checkoutInput.countryregion,
            address:checkoutInput.address,
            city:checkoutInput.city,
            state:checkoutInput.state,
            zipcode:checkoutInput.zipcode,

        }
    }

  
    return (
    
    <div>
        <div className={` py-4 ${style.introBgg} pb-5`}></div>
         <div className="py-5">
         <div className="container">
          <div className="row">
           
            <div className="col-md-7">
                <div className="card">
                    <div className="card-header">
                        <h4>BILING & SHIPING</h4>
                    </div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>First Name:</label>
                                    <input type="text" name="firstname" onChange={handleInput} value={checkoutInput.firstname} className="form-control" />
                            </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Last Name:</label>
                                    <input type="text" name="lastname" onChange={handleInput} value={checkoutInput.lastname} className="form-control" />

                            </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>E-mail Address:</label>
                                    <input type="E-mail" name="email" onChange={handleInput} value={checkoutInput.email} className="form-control" />

                            </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Phone Number:</label>
                                    <input type="number" name="phone" onChange={handleInput} value={checkoutInput.phone} className="form-control" />

                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Company Name:</label>
                                    <input type="text" name="companyname" onChange={handleInput} value={checkoutInput.companyname} className="form-control" />
                            </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Contry / Region:</label>
                                    <select type="select" name="countryregion" onChange={handleInput} value={checkoutInput.countryregion} className="form-control">
                                      
                                      {countriesList.map(country => (
                                       <option key={country.name} value={country.name}>
                                            {country.name}
                                       </option>
                                      ))}
                                      
                                     </select>

                            </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-3">
                                    <label>Full Adress:</label>
                                    <textarea rows='3' name='address' onChange={handleInput} value={checkoutInput.address} className="form-control" />

                             </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>City:</label>
                                    <input type="text" name="city" onChange={handleInput} value={checkoutInput.city} className="form-control" />

                            </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>State:</label>
                                    <input type="text" name="state" onChange={handleInput} value={checkoutInput.state} className="form-control" />

                            </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>Zip code:</label>
                                    <input type="text" name="zipcode" onChange={handleInput} value={checkoutInput.zipcode} className="form-control" />

                            </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group text-end">
                             <button type="button" className="btn btn-outline-success text-white-color-dark" onClick={submitOrder} >Submit Order</button>
                             </div>
                            </div>
                          </div>
                  </div>

                </div>
                  
              </div>

             
              <div className='col-md-5'> 
                       <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th width='50%' colSpan='2'>Product</th>
                                    
                                    <th className='text-black'> Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                          
                           {cart.map((props) => {
                                     return (
                                             
                                            <tr key={id}  >
                                            <td><img src={props.image} alt='' width='50px' height='50px' /></td>
                                            <td> {props.title} </td>
                                            <td> ${props.price} </td>
                                            <td value={cartItems[id]} >{quntity} </td>
                                            <td>{totalPrice} </td>
                                        </tr>  
                                       
                                    )
                                })}
                             <tr>
                                    <td colSpan='2'className='text-end' >Total:</td>
                                     <td colSpan='4'className='text-start' >${totalAmount}</td>
                                 </tr>
                        
                            </tbody>
                        </table>
                 <div/>
           </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Checkout;
