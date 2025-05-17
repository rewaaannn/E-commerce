import React from 'react'
<<<<<<< HEAD
import style from './Service.module.css'
=======
import style from './service.module.css'
>>>>>>> c92fa3c4f77037ad41c31a9f9f5fef99ae4e4738
import {motion} from 'framer-motion';

const textVariants = {
    initial: {
        x: -1,
        opacity: 0,
    },
    animate: {
        x: -1,
       opacity: 1,
       transition:{
        duration:.8,
        staggerChildren: 0.1,
       },
},

};
const variants = {
    initial: {
        x: 0,
        y:150,
        opacity: 0,
    },
    animate: {
        x: 0,
       opacity: 1,
       y:0,
       transition:{
        duration:1,
        staggerChildren: 0.1,
       },
},

};
const pVariants = {
    initial: {
        x: 100,
        y:-100,
        opacity: 0,
    },
    animate: {
        x: 0,
       opacity: 1,
       y:0,
       transition:{
        duration:.8,
        staggerChildren: 0.1,
       },
},

};
const imageVariants = {
    initial: {
        x: -100,
        opacity: 0,
        y:100,
    },
    animate: {
        x: 0,
       opacity: 1,
       y:0,
       transition:{
        duration:.8,
        staggerChildren: 0.1,
       },
},

};
 



export default function Service() {
    return (
        <>
<<<<<<< HEAD
        
        <section className={`${style.backgroundTitle}`}>

            <h3>Service</h3>

        </section>
        
        {/* <section className={`${style.recyclingSec}`}>
            
            <motion.div className="container" variants={textVariants} initial='initial' animate='animate'>
            
                <div className="row align-items-center">
                
                    <div className="col-lg-6"></div>
                
                    <div className="col-lg-6">
                    
                        <div className="textBox">
                        
                            <motion.h4 className={`text-white ${style.boldTitle}` } dir='rtl' variants={textVariants} >Concept of</motion.h4>
                        
                            <motion.h3 className={`text-white text-capitalize ${style.title}`} dir='rtl' variants={textVariants} >waste management </motion.h3>
                        
                            <motion.p  className={`text-white ${style.description}`} variants={textVariants}>The concept of waste management revolves around the systematic administration of waste activities from its generation to its final disposal. The primary goal is to minimize the negative impact on human health and the environment </motion.p>
                        <br></br>
                        <br></br>
                        </div>
                    
                    </div>
                
                </div>
            
            </motion.div>
        
        </section> */}

        <section>

         < motion.div className="container my-4 py-4 "  variants={variants} >
=======
        <section className={`${style.recyclingSec}`}>
            
            <motion.div className="container" variants={textVariants} initial='initial' animate='animate'>
            
                <div className="row align-items-center">
                
                    <div className="col-lg-6"></div>
                
                    <div className="col-lg-6">
                    
                        <div className="textBox">
                        
                            <motion.h4 className={`text-white ${style.boldTitle}` } dir='rtl' variants={textVariants} >Concept of</motion.h4>
                        
                            <motion.h3 className={`text-white text-capitalize ${style.title}`} dir='rtl' variants={textVariants} >waste management </motion.h3>
                        
                            <motion.p  className={`text-white ${style.description}`} variants={textVariants}>The concept of waste management revolves around the systematic administration of waste activities from its generation to its final disposal. The primary goal is to minimize the negative impact on human health and the environment </motion.p>
                        <br></br>
                        <br></br>
                        </div>
                    
                    </div>
                
                </div>
            
            </motion.div>
        
        </section>

        <section>

         < motion.div className="container my-4 py-4 "  variants={variants} initial='initial' animate='animate'>
>>>>>>> c92fa3c4f77037ad41c31a9f9f5fef99ae4e4738
                <div className='row'>
                    <div className='col-12 mb-3' >
                        <motion.p className={`${style.text  } text-center`} variants={variants}> SERVICES</motion.p>
                        <motion.h1 className='display-6 fw-bolder text-center'variants={variants}> What’s Your Waste Problem?</motion.h1>
                        <hr />
                    </div>
                    
                </div>
            </motion.div>



<<<<<<< HEAD
            <motion.div className={`${style.card} container`} variants={variants}  >       
=======
            <motion.div className={`${style.card} container`} variants={variants} initial='initial' whileInView='animate' >       
>>>>>>> c92fa3c4f77037ad41c31a9f9f5fef99ae4e4738
            <div className="row  ">
            <div className={`${style.box} col-md-3 col-lg-3 me-3`}>
            <div className="card h-100 text-center p-0 overflow-hidden "  >
                                    <div className={`${style.boxItem} product-item`}>
                                        <div className={`${style.image}`}>
                                        
                                            <img className={`${style.cardImgTop}`} src='./images/service0.jpg' />
                                        
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="card-title mb-0">Mixed Recycling</h5>
                                            <p className="card-text"> Lorem ipsum dolor sit amet consector.</p>
            </div>
            </div>
            </div>
            </div>
            <div className={`${style.box} col-md-3 col-lg-3 me-3`}>
            <div className="card h-100 text-center p-0 overflow-hidden "  >
                                    <div className={`${style.boxItem} product-item`}>
                                        <div className={`${style.image}`}>
                                        
                                            <img className={`${style.cardImgTop}`} src='./images/service.jpg' />
                                        
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="card-title mb-0">General Waste</h5>
                                            <p className="card-text"> Lorem ipsum dolor sit amet consector.</p>
            </div>
            </div>
            </div>
            </div>
            <div className={`${style.box} col-md-3 col-lg-3 me-3`}>
            <div className="card h-100 text-center p-0 overflow-hidden "  >
                                    <div className={`${style.boxItem} product-item`}>
                                        <div className={`${style.image}`}>
                                        
                                            <img className={`${style.cardImgTop}`} src='./images/service2.jpg' />
                                        
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="card-title mb-0">Plastic Recycling</h5>
                                            <p className="card-text"> Lorem ipsum dolor sit amet consector.</p>
            </div>
            </div>
            </div>
            </div>
            <div className={`${style.box} col-md-3 col-lg-3 me-3`} >
            <div className="card h-100 text-center p-0 overflow-hidden "  >
                                    <div className={`${style.boxItem} product-item`}>
                                        <div className={`${style.image}`}>
                                        
                                            <img className={`${style.cardImgTop}`} src='./images/service3.jpg' />
                                        
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="card-title mb-0">Organics & Food Recycling</h5>
                                            <p className="card-text"> Lorem ipsum dolor sit amet consector.</p>
            </div>
            </div>
            </div>
            </div>
            <div className={`${style.box} col-md-3 col-lg-3 me-3`}>
            <div className="card h-100 text-center p-0 overflow-hidden "  >
                                    <div className={`${style.boxItem} product-item`}>
                                        <div className={`${style.image}`}>
                                        
                                            <img className={`${style.cardImgTop}`} src='./images/service4.jpg' />
                                        
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="card-title mb-0">E-Waste Recycling</h5>
                                            <p className="card-text"> Lorem ipsum dolor sit amet consector.</p>
            </div>
            </div>
            </div>
            </div>
            <div className={`${style.box} col-md-3 col-lg-3 me-3`}>
            <div className="card h-100 text-center p-0 overflow-hidden "  >
                                    <div className={`${style.boxItem} product-item`}>
                                        <div className={`${style.image}`}>
                                        
                                            <img className={`${style.cardImgTop}`} src='./images/service5.jpg' />
                                        
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="card-title mb-0">Metal Recycling</h5>
                                            <p className="card-text"> Lorem ipsum dolor sit amet consector.</p>
            </div>
            </div>
            </div>
            </div>

            </div>
            </motion.div>
            


       
                     
        </section>
        <section>
        <div className="py-5" >
<<<<<<< HEAD
            <motion.div className="container" variants={imageVariants} >
=======
            <motion.div className="container" variants={imageVariants} initial='initial' animate='animate'whileInView='animate'>
>>>>>>> c92fa3c4f77037ad41c31a9f9f5fef99ae4e4738
                <div className="row">
                <motion.div className={`${style.aboutSeccc} col-md-6 `} variants={imageVariants}>
               <motion.div className={`${style.aboutSec}` } variants={imageVariants} > </motion.div>       
                 </motion.div>
                 <div className={`${style.features} col-md-5`} >
<<<<<<< HEAD
                    <div className="container" variants={pVariants} >
=======
                    <div className="container" variants={pVariants} initial='initial' whileInView='animate'>
>>>>>>> c92fa3c4f77037ad41c31a9f9f5fef99ae4e4738
                        <motion.p className={`${style.aboutp}`} variants={pVariants}> GENERAL WASTE MANAGEMENT </motion.p>
                        <motion.p className={`${style.aboutpp}`} variants={pVariants}>General Waste Management </motion.p>
                        <motion.p className={`${style.aboutppp}`} variants={pVariants}>Waste management is the process of handling waste materials from the point of their creation to their final disposal. This includes a range of activities and actions designed to manage waste in an efficient, environmentally responsible, and sustainable manner.</motion.p>
                         <motion.p className={`${style.aboutppp}`} variants={pVariants}> Waste management encompasses the activities and actions required to manage waste from its inception to its final disposal. This includes the collection, transport, treatment, and disposal of waste, along with monitoring and regulation.</motion.p>
                    </div>

                 </div>
  
                </div>
            </motion.div>

        </div>

        </section>
        <section>
        <div className="py-5">
<<<<<<< HEAD
         <motion.div className="container" variants={imageVariants}>
          <div  className="row align-items-center" >
          <div className={` col-sm-12 col-md-6 `}>
                <div className={`${style.aboutSecc}`}>
                
=======
         <motion.div className="container" variants={imageVariants} initial='initial'  whileInView='animate'>
          <div  className="row" >
          <div className={`${style.aboutSecc} col-md-6 `}>
>>>>>>> c92fa3c4f77037ad41c31a9f9f5fef99ae4e4738
                <motion.p className={`${style.aboutp2}`} variants={imageVariants}>COMMERCIAL</motion.p>
                <motion.p className={`${style.aboutpp2}`} variants={imageVariants}>Commercial Waste Solutions. </motion.p>
                <motion.p className={`${style.aboutppp2}`}variants={imageVariants}> Household Waste: Regular collection services for residential areas, Commercial and Industrial Waste: Tailored services for businesses and factories.Hazardous Waste: Specialized handling and transport to prevent environmental contamination.</motion.p>
                <motion.p className={`${style.aboutppp2}`} variants={imageVariants}>Effective waste management aims to minimize the impact of waste on the environment, reduce the amount of waste generated, and promote recycling and resource recovery, It involves collaboration between governments, businesses, and individuals to create systems that are both efficient and sustainable.</motion.p>
               <button type='btn' className={`${style.aboutbtn} btn btn-success text-white`}>Learn How to Recycle Right </button>
<<<<<<< HEAD
                
                </div>
            </div>
            <div className={` col-sm-12 col-md-6`} >
                    <div className={`${style.features}`}>
                    
                    <motion.div className="" variants={pVariants} >
                    <motion.div className={`${style.aboutSec2}` }variants={pVariants}> </motion.div>       
                    </motion.div>
                    
                    </div>
=======
            </div>
            <div className={`${style.features} col-md-5`} >
                    <motion.div className="container" variants={pVariants} initial='initial' whileInView='animate'>
                    <motion.div className={`${style.aboutSec2}` }variants={pVariants}> </motion.div>       
                    </motion.div>
>>>>>>> c92fa3c4f77037ad41c31a9f9f5fef99ae4e4738
                    </div>
              
            </div>
            </motion.div>
            </div>       
</section>

<section>
<<<<<<< HEAD
            <motion.div  className={`${style.cardd} row gx-0`} variants={variants} >
=======
            <motion.div  className={`${style.cardd} row gx-0`} variants={variants} initial='initial' whileInView='animate'>
>>>>>>> c92fa3c4f77037ad41c31a9f9f5fef99ae4e4738
                    
                    <div className="col-md-3 col-lg-3 me-3  text-center ">
                    
                        <div className={`${style.cardservice}  text-center`}>
                        
                            <div >
                            <img className={`${style.iconBoox}`} src='./images/verified.png' />
                            <h4 className={`${style.iconBooox}`}>Wet Refuse</h4>
                            </div>
                            <div className={`${style.boox} col-md-6`}>
                            <p className={`${style.box}`}>food waste, plant waste, residential waste, organic waste and other damp or moist types of waste.</p>
                            </div>                        
                        </div>                    
                    </div>

                    <div className="col-md-3 col-lg-3 me-3">
                    
                        <div className={`${style.cardservice} text-center`}>
                        
                        <div >
                            <img className={`${style.iconBoox}`} src='./images/verified.png' />
                            <h4 className={`${style.iconBooox}`} >Dry Refuse</h4>
                            </div>
                            <div className={`${style.boox} col-md-6`}>
                            <p className={`${style.box}`}>paper goods, cardboard boxes, wood and glass.</p>
                       </div>
                        </div>
                    
                    </div>
                    <div className="col-md-3 col-lg-3 me-3">
                    
                        <div className={`${style.cardservice} text-center`}>
                        
                        <div >
                            <img className={`${style.iconBoox}`} src='./images/verified.png' />
                            <h4 className={`${style.iconBooox}`}>Bulky Refuse</h4>
                            </div>
                            <div  className={`${style.boox} col-md-6`} >
                            <p className={`${style.box}`}>pallets, crates, appliances, furniture and other large or unwieldy items.</p>
                       </div>
                        </div>
                    
                    </div>
                    </motion.div>
            </section>


            <section>
            <div className="py-5">
<<<<<<< HEAD
         <motion.div className="container" variants={imageVariants} >
=======
         <motion.div className="container" variants={imageVariants} initial='initial'  whileInView='animate'>
>>>>>>> c92fa3c4f77037ad41c31a9f9f5fef99ae4e4738
          <div  className="row" >
          <div className={`${style.lastsec} col-md-6 `}>
                <motion.p className={`${style.lastp2}`} variants={imageVariants}>SOLUTION</motion.p>
                <motion.p className={`${style.lastpp2}`} variants={imageVariants}>Solutions for <br/> Small to Medium <br/> Sized Businesses </motion.p>
                
            </div>
            <div className={`${style.features} col-md-5`} >
<<<<<<< HEAD
                    <motion.div className="container" variants={pVariants} >
=======
                    <motion.div className="container" variants={pVariants} initial='initial' whileInView='animate'>
>>>>>>> c92fa3c4f77037ad41c31a9f9f5fef99ae4e4738
                    <motion.p className={`${style.lastp}` }variants={pVariants}> For small to medium-sized businesses (SMBs), finding effective solutions to streamline operations, enhance productivity, and boost growth is crucial. Here are some comprehensive solutions across various aspects </motion.p>       
                    <button type='btn' className={`${style.lastbtn} btn btn-success text-white`}>Learn How to Recycle Right </button>
                    </motion.div>
                    </div>
              
            </div>
            </motion.div>
            </div>     

            
           
            </section>
        
        
        </>
     
    )
}