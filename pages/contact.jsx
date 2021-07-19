import React, {useRef, useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import Title from '../components/animPart/Title';
import {contactLink} from '../dataConfig'
import SocialList from '../components/contact/SocialList';

const Contact = () => {
    const [textarea, setTextarea] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
    
    return (
        <motion.main
            variants={{
                hidden:{
                    opacity:0
                },
                visible:{
                    opacity:1,
                    transition:{
                        duration:1,
                        when :'beforeChildren'
                    }
                }
            }}
            initial="hidden"
            animate="visible"
        >
            <div className="form-container">
                <Title className="__title">Contact</Title>
                <div className="item-container">
                    <div className="input-container">
                        <div className="input_wrap">
                            <input type="text" required />
                            <label>Your Name</label>
                        </div>
                        <div className="input_wrap">
                            <input 
                                onBlur={ (e) => {
                                    let target = e.target
                                    setEmailValid(target.checkValidity() || target.value == 0)
                                }}
                                type="email" 
                                required 
                                className={emailValid ? '' : 'input-invalid'}
                            />
                            <label className={emailValid ? '' : 'label-invalid'}>Your E-mail</label>
                        </div>
                        <div className="input_wrap">
                            <textarea 
                                className={textarea ? 'textarea-active' : ''}
                                onBlur = { (e) => {
                                    e.target.value.length == 0 || '' ?
                                    setTextarea(false) :
                                    setTextarea(true)
                                }}
                            ></textarea>
                            <label className="">Message</label>
                        </div>
                        <div className="input_wrap submit-container">
                            {/* <motion.circle></motion.circle>
                            <motion.div className="submit">Submit</motion.div> */}
                            <button class="custom-btn btn-5"><span>Submit</span></button>
                        </div>    
                    </div>
                </div>
            </div>
            <motion.div className="social-container" 
                variants={{
                    hidden : {
                        skewX:100,
                        x:"100%"
                    }, 
                    show : {
                        skewX:0,
                        x:0,
                        transition :{
                            duration : 2,
                            delayChildren :1.5,
                            staggerChildren : .05
                        }
                    }
                }}
                animate="show"
                initial="hidden"
            >
                <div className="navigation-wrapper">
                    <div className="project-preview-wrapper">
                        <div className="project-preview"></div>
                    </div>
                    <ul className="navigation-list">
                        {
                            contactLink.map((val, i) => {
                                return(
                                    <SocialList data={val} index={i} />
                                )
                            })
                        }
                    </ul>
                </div>
            </motion.div>
        </motion.main>
    )
}

export default Contact