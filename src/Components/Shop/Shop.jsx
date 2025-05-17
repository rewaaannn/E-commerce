import React, { useState, useEffect, useContext } from 'react'
import Products from './Products'
import style from './Products.module.css'
import { MdRemoveRedEye } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { ShopContext } from '../../context/shop-context'


export default function Shop() {
    const {addToCart, cartItems, removeFromCart} = useContext(ShopContext);

    const [data, setData] = useState(Products);
    const [filter, setFilter] = useState(data);
    const [detail, setDetail] = useState([]);
    const [close, setClose] = useState(false)
    const detailPage = (product) => {
        setDetail([{ ...product }])
        setClose(true)
    }
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getShop = async () => {
            // setLoading(true);
            const response = await fetch('{Products}');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }

        getShop();

    }, []);


    const Loading = () => {
        return <> Loading.... </>;

    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    function disableScroll() {
        document.body.classList.add("stop-scrolling");
    }

    function enableScroll() {
        document.body.classList.remove("stop-scrolling");
    }

    function disableScrollAndViewProduct(i) {
        detailPage(i);
        disableScroll();
    }

    const ShowShop = () => {
        return (
            <>
                <div className=' buttons d-flex justify-content-center mb-4 pb-4'>
                    <button className='btn btn-outline-success text-white-color-dark me-3' onClick={() => setFilter(data)}  >All</button>
                    <button className='btn btn-outline-success text-white-color-dark me-3' onClick={() => filterProduct('plastic')}>plastic</button>
                    <button className='btn btn-outline-success text-white-color-dark me-3' onClick={() => filterProduct('toys')}>toys</button>
                    <button className='btn btn-outline-success text-white-color-dark me-3' onClick={() => filterProduct('furniture')}>furniture</button>
                </div>

                {

                    close ?
                    
                        <div className={`${style.overlay}`}>
                        
                        <div className={`${style.detailContainer}`}>
                            <div className={`${style.detailContent}`}>
                                <button className={`${style.close}`} onClick={() => setClose(false)}> <AiFillCloseCircle/>  </button>
                                {

                                    detail.map((props) => {
                                        const { id, title, price, image, rating, description} =props
                                        const cartItemAmount = cartItems[id];
                                        return (
                                            <>
                                                <div className={`${style.detailInfo}`}>
                                                    <div className={`${style.imgBox}`}>
                                                        <img src={image} alt={title} />
                                                    </div>
                                                    <div className={`${style.productDetail}`}>
                                                        <h2>{title}</h2>
                                                        <h3>$ {price} </h3>
                                                        <p> {description} </p>
                                                        <div className='input-group '>
                                                            <button type='button'  onClick={() =>removeFromCart(id)} className='btn btn-outline-success text-white-color-dark '>-</button>
                                                            <div className='form-control text-center'>{cartItemAmount}</div>
                                                            <button type='button' onClick={() => addToCart(id)} className='btn btn-outline-success text-white-color-dark'>+</button>
                                                         </div> <br/>
                                                        <button className="btn btn-outline-success text-white-color-dark me-3" onClick={()=>addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>} <i className='fa fa-shopping-cart me-2 '></i></button>

                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        
                        </div>: null
                }
                <div className={`${style.containerShop} row`}>
                

                {filter.map((product) => {
                      const { id, tittle, price, image} =product;
                      <detail data={product} />
                      const cartItemAmount = cartItems[id];
                    return (
                        <>

                            <div className=' col-md-4 col-lg-3 mb-4' >
                                <div className="card h-100 text-center p-0 overflow-hidden " key={product.id} >
                                    <div className={`${style.boxItem} product-item`}>
                                        <div className={`${style.image}`}>
                                        
                                            <img className={`${style.cardImgTop}`} src={product.image} alt={product.title} />
                                        
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="card-title mb-0">{product.title}</h5>
                                            <p className="card-text"> ${product.price}</p>

                                            <div className="d-flex gap-2 justify-content-between flex-wrap align-items-center">
                                            
                                                <button className="btn btn-outline-success text-white-color-dark" onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}<i className='fa fa-shopping-cart me-2 '></i></button>

                                                <button onClick={() => disableScrollAndViewProduct(product)} className="btn btn-outline-success text-white-color-dark me-3 ">View <MdRemoveRedEye/> </button>
                                            
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>

                    )
                })}

                </div>

            </>

        )
    }


    return (
        <div>
            <section className={`${style.backgroundTitle}`}>

                <h3>shop</h3>

            </section>
            {/* <div className={` text-white ${style.introBg}`}>
                <div className={`${style.cardImg}`}>
                    <h5 className="card-title display-3 fw-bolder mb-0">OUR PAGE SHOP</h5>
                    <p className="card-text fs-2">Let’s Start Shop</p>
                    <div>
                        <a href='./shop' className=" btn btn-success text-white">SHOP NOW</a>
                    </div>
                </div>

            </div> */}
            <div className="container my-4 py-4">
                <div className='row'>
                    <div className='col-12 mb-3'>
                        <h1 className='display-6 fw-bolder text-center'> OUR PRODUCTS</h1>
                        <hr />
                    </div>
                    <div className='row justify-content-center'>
                        {loading ? <Loading /> : <ShowShop />}
                    </div>
                </div>
            </div>
        </div>

    )

}