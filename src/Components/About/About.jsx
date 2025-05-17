import React from 'react'
import style from './About.module.css'
import {animate, motion} from 'framer-motion';


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


export default function About() {

    return (

        <>
            <section className={`${style.backgroundTitle}`}>

                <h3>about us</h3>

            </section>
        <section>
        <div className="py-5" >
            <motion.div className="container" variants={imageVariants} initial='initial' animate='animate'whileInView='animate'>
                <div className="row">
                <motion.div className={`${style.aboutSeccc} col-md-6 `} variants={imageVariants}>
               <motion.div className={`${style.aboutSec}` } variants={imageVariants} > </motion.div>       
                 </motion.div>
                 <div className={`${style.features} col-md-5`} >
                    <div className="container" variants={pVariants} initial='initial' whileInView='animate'>
                        <motion.p className={`${style.aboutp}`} variants={pVariants}> ABOUT US </motion.p>
                        <motion.p className={`${style.aboutpp}`} variants={pVariants}>The Future of Waste Management </motion.p>
                        <motion.p className={`${style.aboutppp}`} variants={pVariants}>Recycling is a crucial part of a sustainable future, helping to protect the environment and conserve resources for future generations.</motion.p>
                         <motion.p className={`${style.aboutppp}`} variants={pVariants}>Recycling is one of the most important actions currently available to reduce these impacts and represents one of the most dynamic areas in the plastics industry today. Recycling provides opportunities to reduce oil usage, carbon dioxide emissions and the quantities of waste requiring disposal. Here, we briefly set recycling into context against other waste-reduction strategies, namely reduction in material use through downgauging or product reuse.</motion.p>
                    </div>

                 </div>
  
                </div>
            </motion.div>

        </div>
        </section>
        <section>
        <div className="py-5">
         <motion.div className="container" variants={imageVariants} initial='initial'  whileInView='animate'>
          <div  className="row" >
          <div className={`${style.aboutSecc} col-md-6 `}>
                <motion.p className={`${style.aboutp2}`} variants={imageVariants}>COMMERCIAL</motion.p>
                <motion.p className={`${style.aboutpp2}`} variants={imageVariants}>Commercial Waste Management for a Better. </motion.p>
                <motion.p className={`${style.aboutppp2}`}variants={imageVariants} >the recycling materials is very important for humanity and civilization. In addition, the value of the world ecosystem and its importance for a livable world is an undeniable fact in today’s world. In this work, we aim on classifying the recycling of materials such as glass, paper, cardboard, and metal.</motion.p>
                <motion.p className={`${style.aboutppp2}`} variants={imageVariants}>Effective plastic recycling requires coordinated efforts from individuals, businesses, and governments to address the challenges and harness the benefits of recycling.</motion.p>
               <button type='btn' className={`${style.aboutbtn} btn btn-success text-white`}>Learn How to Recycle Right </button>
            </div>
            <div className={`${style.features} col-md-5`} >
                    <motion.div className="container" variants={pVariants} initial='initial' whileInView='animate'>
                    <motion.div className={`${style.aboutSec2}` }variants={pVariants}> </motion.div>       
                    </motion.div>
                    </div>
              
            </div>
            </motion.div>
            </div>
            
</section>

            <section>
            <motion.div  className={`${style.cardd} row gx-0`} variants={variants} initial='initial' whileInView='animate'>
                    
                    <div className={`${style.cardd} col-md-6 col-lg-5 me-3`} >
                    
                        <div className={`${style.card} text-center`} >
                        
                            <div >
                            <img className={`${style.iconBoox}`} src='./images/verified.png' />
                            <h4 className={`${style.iconBooox}`}>Refuse</h4>
                            </div>
                            <div className={`${style.boox} col-md-6`}>
                            <p className={`${style.box}`}>Refusing involves rejecting products that are harmful to <br/> the environment or unnecessary Say no to single-use plastics like straws, bags, and cutlery.
                           Avoid products with excessive packaging. Choose products that are designed.</p>
                            </div>                        
                        </div>                    
                    </div>
                
                    <div className="col-md-6 col-lg-5 me-3">
                    
                        <div className={`${style.card} text-center`}>
                        
                        <div >
                            <img className={`${style.iconBoox}`} src='./images/verified.png' />
                            <h4 className={`${style.iconBooox}`}>Reduce</h4>
                            </div>
                            <div className={`${style.boox} col-md-6`}>
                            <p className={`${style.box}`}>Reducing means cutting down the amount of waste generated,Buy in bulk to reduce packaging waste Choose products with minimal packaging  for digital receipts and communications instead of paper.</p>
                       </div>
                        </div>
                    
                    </div>
                
                    <div className="col-md-6 col-lg-5 me-3">
                    
                        <div className={`${style.card} text-center`}>
                        
                        <div >
                            <img className={`${style.iconBoox}`} src='./images/verified.png' />
                            <h4 className={`${style.iconBooox}`} >Reuse</h4>
                            </div>
                            <div className={`${style.boox} col-md-6`}>
                            <p className={`${style.box}`}>Reusing entails finding ways to use items instead of discarding them,Repurpose jars and containers for storage,
                             Donate clothes, furniture, and other goods instead of throwing them away.Use reusable shopping bags, water bottles, and coffee cups.</p>
                       </div>
                        </div>
                    
                    </div>
                    <div className="col-md-6 col-lg-5 me-3">
                    
                        <div className={`${style.card} text-center`}>
                        
                        <div >
                            <img className={`${style.iconBoox}`} src='./images/verified.png' />
                            <h4 className={`${style.iconBooox}`}>Recycle</h4>
                            </div>
                            <div  className={`${style.boox} col-md-6`} >
                            <p className={`${style.box}`}>Recycling involves processing materials to make new products,Separate recyclable materials such as paper, glass, and metals from your trash,
                            Follow local recycling guidelines to ensure proper sorting and disposal. Support products made from recycled materials.</p>
                       </div>
                        </div>
                    
                    </div>
                    </motion.div>
            </section>

            <section>
        <div className="py-5">
         <motion.div className="container" variants={variants} initial='initial' whileInView='animate'>
          <div className="row" >
          <div className={`${style.lastsecc} col-md-6 `}>
                <p className={`${style.lastP}`} >SOLUTIONS</p>
                <p className={`${style.lastpp}`} >Choose a Solution that Supports Your Business’ Waste Needs. </p>
                <p className={`${style.lastppp}`} >the recycling materials is very important for humanity and civilization. In addition, the value of the world ecosystem and its importance for a livable world is an undeniable fact in today’s world. In this work, we aim on classifying the recycling of materials such as glass, paper, cardboard, and metal.</p>
            <button type='btn'className=" btn btn-success text-white">Learn more </button>
            </div>
            <div className={`${style.features} col-md-5`} >
                    <div className="container">
                    <div className={`${style.lastSec}`}> </div>       
                    </div>
                    </div>
              
            </div>
            </motion.div>
            </div>
            
</section>

<section >

            <div className={` text-white ${style.aboutpage}`}>
                <motion.div className={`${style.cardImg} text-center`} variants={variants} initial='initial' whileInView='animate'>
                    <motion.p className={`${style.lastP}  `}variants={variants}>GET STARTED</motion.p>
                    <motion.p className={`${style.lastpp}  `}variants={variants}>Create Real Transformation <br/> with a Cleana</motion.p>
                    <motion.p className={`${style.lastppp}  `}variants={variants}>Waste management doesn’t have to be a burden to your business.</motion.p>
                    <div>
                        <motion.a href='./Contact' className=" btn btn-success text-white" variants={variants}>Contact Us Today</motion.a>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                    
                    </div>
                    
                </motion.div>
                </div>
        
</section>
        </>
    
    )
}

