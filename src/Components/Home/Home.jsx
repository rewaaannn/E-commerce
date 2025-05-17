import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import style from './Home.module.css'
// import { Link } from 'react-router-dom'
import bg from '../../images/bg-8-removebg-previewCopy.png'
import img1 from '../../images/img-2.jpeg'
import img2 from '../../images/img-3.jpeg'
import img3 from '../../images/img-4.jpeg'
import img4 from '../../images/img-5.jpeg'
import Products from '../Shop/Products'
import style2 from '../Shop/Products.module.css'
import { MdRemoveRedEye } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { ShopContext } from '../../context/shop-context'

export default function Home() {

    const {addToCart, cartItems, removeFromCart} = useContext(ShopContext);


    const [data, setData] = useState(Products);
    const [close, setClose] = useState(false)
    const [filter, setFilter] = useState(data);
    const [detail, setDetail] = useState([]);
    const detailPage = (product) => {
        setDetail([{ ...product }])
        setClose(true)
    }

    const [productId, setProductId] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState('');
  
    const handleChange = (e) => {
      setProductId(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.get('http://localhost:5000/recommend', {
          params: { product_id: productId },
        });
        setRecommendations(response.data.recommendations);
        setError('');
      } catch (error) {
        setError('Product ID not found');
        setRecommendations([]);
      }
    };

    let componentMounted = true;

    useEffect(() => {
        const getShop = async () => {
            // setLoading(true);
            const response = await fetch('{Products}');
            if (componentMounted) {
                setData(await response.clone().json());
            }

            return () => {
                componentMounted = false;
            }
        }

        getShop();

    }, []);

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

    return (
        <>
        
            <section className={` ${style.infoSec}`}>
            
                <div className="container h-100">
                
                    <div className="row align-items-center h-100">
                    
                        <div className="col-lg-6">
                        
                            <div className="leftSide">
                            
                                <h3 className={`${style.title}`}>Sustainable life</h3>
                            
                                <p className={`${style.description}`}>changing the world through recycling used material.</p>
                            
                                <button className={`btn btn-solid ${style.readBtn}`}>Read more</button>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-lg-6 d-sm-none d-md-none d-lg-block">
                        
                            <div className="rightSide">
                            
                                <div className="image text-center">
                                
                                    <img src={bg} alt="" className={`${style.greenCycle}`} style={{width: `90%`}} />
                                
                                </div>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                </div>

            </section>
        
            <section className={`${style.serviceSec}`}>
            
                <div className="container h-100">
                    
                    <div className="row align-items-center h-100">
                    
                        <div className="col-lg-6">
                        
                            <div className="textBox ">
                            
                                <h4 className={`text-success ${style.boldTitle}`}>What if, the material industry</h4>
                            
                                <h3 className={`text-success ${style.title}`}>Continued to Produce</h3>
                            
                                <p className={`text-success ${style.description}`}>Goods each year without considering the environment impact?</p>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </section>
        
            <section className={`${style.recyclingSec}`}>
            
                <div className="container h-100">
                    
                    <div className="row align-items-center h-100">
                    
                        <div className="col-lg-6"></div>
                    
                        <div className="col-lg-6">
                        
                            <div className="textBox">
                            
                                <h4 className={`text-white ${style.boldTitle}`} dir='rtl' >Concept of</h4>
                            
                                <h3 className={`text-white text-capitalize ${style.title}`} dir='rtl' >Recycling used material </h3>
                            
                                <p className={`text-white ${style.description}`}>The concept of recycling used material offers a promising opportunity to reduce these negative impacts. Scrap recycling involves collecting, sorting and reprocessing material that are no longer in use. </p>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </section>
        
            <section className={`d-flex align-items-center ${style.about}`}>
            
                <div className="container">
                
                    <div className="head">
                    
                        <h2 className={`${style.headTitle}`}>Service</h2>
                    
                    </div>
                
                    <div className="row align-items-center">
                    
                        <div className="col-lg-6">
                        
                            <div className={`${style.textBox}`}>
                            
                                <p className={`text-dark mt-0 mb-3 ${style.description}`}>Passionate about collecting? You've come to the right place! Connect with a vibrant community of collectors, discover valuable resources, and explore a vast marketplace for buying, selling, and trading your treasures. Join us and experience the joy of collecting!</p>
                            
                                <p className={`text-dark mt-0 mb-2 ${style.description}`}>Specific Collection System (Examples) :</p>
                            
                                <ul className={`m-0 p-0 ${style.collectionList}`}>
                                
                                    <li><h4 className={` ${style.collectionEx}`}>Plastic.</h4></li>
                                
                                    <li><h4 className={` ${style.collectionEx}`}>Paper.</h4></li>
                                
                                    <li><h4 className={` ${style.collectionEx}`}>Aluminum cans.</h4></li>
                                
                                </ul>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-lg-6">
                        
                            <div className={`d-flex flex-wrap justify-content-center gap-3 ${style.image}`}>
                            
                                <img src={img1} alt="" width={`100%`} />
                            
                                <img src={img2} alt="" width={`100%`} />
                            
                                <img src={img3} alt="" width={`100%`} />
                            
                                <img src={img4} alt="" width={`100%`} />
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </section>
        
            <section className={`${style.features}`}>
            
                <div className="container">
                
                    <div className="head">
                        
                        <h2 className={`${style.headTitle}`}>features</h2>
                    
                    </div>
                
                    <div className="row gx-0">
                    
                        <div className="col-md-6 col-lg-4">
                        
                            <div className={`${style.card} text-center`}>
                            
                                <div className={`${style.iconBox}`}>
                                
                                    <i className="fa-solid fa-truck-fast"></i>
                                
                                </div>
                            
                                <h4>shipping</h4>
                            
                                <p className="mb-0">Fast and Reliable Shipping</p>
                            
                                <p>Shipping Made Easy</p>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-md-6 col-lg-4">
                        
                            <div className={`${style.card} text-center`}>
                            
                                <div className={`${style.iconBox}`}>
                                
                                    <i className="fa-solid fa-hand-holding-dollar"></i>
                                
                                </div>
                            
                                <h4>10 day return</h4>
                            
                                <p>Not satisfied with your purchase? We’ve got you covered.</p>
                            
                                
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-md-6 col-lg-4">
                        
                            <div className={`${style.card} text-center`}>
                            
                                <div className={`${style.iconBox}`}>
                                
                                    <i className="fa-solid fa-headset"></i>
                                
                                </div>
                            
                                <h4>27/4 Support</h4>
                            
                                <p className='mb-0'>Your Satisfaction is Our Priority</p>
                            
                                <p>Reliable Support, Anytime You Need It</p>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </section>
        
            {/* <div>
                <h1>Product Recommendation</h1>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={productId}
                    onChange={handleChange}
                    placeholder="Enter Product ID"
                    />
                    <button type="submit">Get Recommendations</button>
                </form>
                {error && <p>{error}</p>}
                <h2>Recommendations:</h2>
                <ul>
                
                </ul>
            </div> */}
        
        </>
    )
}
