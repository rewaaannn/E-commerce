import React, {useState} from 'react'
import style from './Contact.module.css'
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import axios from 'axios';
import { Form } from 'react-router-dom';






export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitStatus('Submitting...');
  
      try {
        const response = await axios.post('/api/contact', {
          name,
          email,
          message,
        });
  
        if (response.status === 200) {
          setName('');
          setEmail('');
          setMessage('');
          setSubmitStatus('Success!');
        } else {
          setSubmitStatus('Error submitting form.');
        }
      } catch (error) {
        console.error(error);
        setSubmitStatus('Error submitting form.');
      }
    };


    // const form = useRef()

    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs
    //       .sendForm('cleana@123', 'template_bx9823l', form.current, {
    //         publicKey: 'oygB6laQhsAYvQvld',
    //       })
    //       .then(
    //         () => {
    //           console.log('SUCCESS!');
    //         },
    //         (error) => {
    //           console.log('FAILED...', error.text);
    //         },
    //       );
    //       e.target.reset()
    //   };
   
    return (

        <>

            <section className={`${style.backgroundTitle}`}>

                <h3>Contact us</h3>

            </section>

            <div className={` ${style.bag} `} >
            <div className={` py-4 ${style.introBgg} pb-5`}></div>
            <div className="py-5">
            <div className="container">
            <div className="row" >
            
                <div   className="col-md-7 ">
                    <div className="card">
                        <div className={` ${style.header} card-header `}>
                            <h4>CONTACT US</h4>
                        </div>
                        <form ref={Form} onSubmit={handleSubmit} >
                        {/* Form fields for name, email, and message */}

                            <div className={`${style.box} row `}>
                                <div className="col-md-10  ">
                                    <div className="form-group mb-3">
                                        <label>Full Name:</label>
                                        <input type="text" name="fulltname"  placeholder=' Enter Your Name'  className={`${style.inputField }`} required />
                                        <div className={`${style.iconBoox}`}>
                                        <FaUser />
                                    </div>
                                        <i class='bx bx-user'></i>
                                </div>
                                </div>
                                
                                <div  className="col-md-5 ">
                                    <div className="form-group ">
                                        <label>E-mail Address:</label>
                                        <input type="E-mail" name="email" placeholder='Enter Email'  className={`${style.inputField }`} required />
                                        <div className={`${style.iconBoox}`}>
                                        <MdEmail />
                                    </div>

                                </div>
                                </div>
                                <div className="col-md-5 ">
                                    <div className="form-group  ">
                                        <label>Phone Number: </label>
                                        <input type="number" name="phone"  placeholder='Enter Phone Number'   className={`${style.inputField }`} required />
                                        <div className={`${style.iconBoox}`}>
                                        <FaPhoneAlt />
                                    </div>

                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="form-group  ">
                                        <label>Subject</label>
                                        <input type="text" name="subject" placeholder='Enter Your Subject'  className={`${style.inputField }`} required />
                                        <div className={`${style.iconBoox}`}>
                                        <FaUser />
                                    </div>

                                </div>
                                </div>
                                
                                <div className="col-md-6 ">
                                <div className="form-group ">
                                    <textarea name='message' placeholder='Enter Your Message' className={`${style.inputFieldd }`}  cols='75' rows='4' required >
                                    </textarea>
                                    
                                    </div>
                                    </div>
                            
                                <div className="col-md-15">
                                    <div className="form-group text-end">
                                <button type="submit" className="btn btn-outline-success text-white-color-dark">Send Message</button>
                                {submitStatus && <p>{submitStatus}</p>}
                                </div>
                                </div>

                            </div>
                    </form>
                    </div>
                    </div>
                    <div  className={`${style.features} col-md-5`} >
                        <div className="container text-center"> 
                        <div className="head">
                        <img src='./images/Contact(1).png' width={450} height={320} />
                    </div>
                            <h2 className={`${style.headTitle} `}>Get In Touch</h2>
                        </div>
                        <div  className={`${style.cardd} row gx-0`}>
                        
                            <div className="col-md-6 col-lg-5 me-3  text-center ">
                            
                                <div className={`${style.card} `}>
                                
                                    <div className={`${style.iconBox}`}>
                                    <LuPhone />
                                    </div>
                                
                                    <h4>Phone</h4>
                                
                                    <p>(+1) 618 190 496</p>
                                
                                </div>
                            
                            </div>
                        
                            <div className="col-md-6 col-lg-5 me-3">
                            
                                <div className={`${style.card} text-center`}>
                                
                                    <div className={`${style.iconBox}`}>
                                    
                                    <MdOutlineEmail />
                                    
                                    </div>
                                
                                    <h4>Email</h4>
                                
                                    <p>support@fastkart.com</p>
                                
                                </div>
                            
                            </div>
                        
                            <div className="col-md-6 col-lg-5 me-3">
                            
                                <div className={`${style.card} text-center`}>
                                
                                    <div className={`${style.iconBox}`}>
                                    
                                    <SlLocationPin  />
                                    
                                    </div>
                                
                                    <h4>Cleana Office</h4>
                                
                                    <p>Cruce Casa de Postas 29</p>
                                
                                </div>
                            
                            </div>
                            <div className="col-md-6 col-lg-5 me-3">
                            
                                <div className={`${style.card} text-center`}>
                                
                                    <div className={`${style.iconBox}`}>
                                    
                                    <HiOutlineBuildingOffice2 />

                                    
                                    </div>
                                
                                    <h4>Bournemouth Office</h4>
                                
                                    <p>Visitación de la Encina 22</p>
                                
                                </div>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                        
                        </div>
                        
                
                    
            </div>
        <div>
    </div>
    </div>
            </div>
    
        </>
    
    )
}
