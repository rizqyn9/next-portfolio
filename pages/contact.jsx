import React, {useRef, useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import Title from '../components/animPart/Title';

const Contact = () => {
    const [textarea, setTextarea] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
    
    const socialContainer = useRef();


    useEffect(() => {
    }, []);

    return (
        <main>
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
                    </div>
                </div>
            </div>
            <div className="social-container" ref={socialContainer}>
                <div className="navigation-wrapper">
                    <div className="project-preview-wrapper">
                        <div className="project-preview"></div>
                    </div>
                    <ul className="navigation-list">
                        <li className="navigation-item item1">
                            <a className="navigation-link navigation-link-1" href="#">
                            <span data-text="Twitter">Twitter</span>
                            </a>
                        </li>
                        <li className="navigation-item">
                            <a className="navigation-link navigation-link-1" href="#">
                            <span data-text="Github">Github</span>
                            </a>
                        </li>
                        <li className="navigation-item">
                            <a className="navigation-link navigation-link-1" href="#">
                            <span data-text="LinkedIn">LinkedIn</span>
                            </a>
                        </li>
                        <li className="navigation-item">
                            <a className="navigation-link navigation-link-1" href="#">
                            <span data-text="Dribble">Dribble</span>
                            </a>
                        </li>
                        <li className="navigation-item">
                            <a className="navigation-link navigation-link-1" href="#">
                            <span data-text="Facebook">Facebook</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Contact