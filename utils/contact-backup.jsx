import React, {useRef, useState} from 'react'
import {gsap, TimelineMax} from 'gsap'
import { Controls, PlayState, Tween, SplitChars } from 'react-gsap';

const Contact = () => {
    const [nameActive, setNameActive] = useState(false);
    const [email, setEmail] = useState(false);
    const [msg, setMsg] = useState(false);

    const focusInput = (e, isEnter, isActive) => {
        let getTarget1 = e.target.attributes.getNamedItem("data-target").value
        let Target1 = document.getElementsByClassName(getTarget1);
        let getTarget2 = e.target.attributes.getNamedItem("data-target2").value
        let Target2 = document.getElementsByClassName(getTarget2);
        if(isActive) return;
        if(isEnter){
            gsap.to(Target1, {
                stagger:.1,
                y: '-1rem',
                opacity:0
            })
            gsap.to(Target2, {
                stagger:.1,
                y: '-1rem',
                opacity:1
            })
        } else {
            gsap.to(Target1, {
                stagger:.1,
                y: '0rem',
                opacity:1
            })
            gsap.to(Target2, {
                stagger:.1,
                y: '0rem',
                opacity:0
            })
        }
    }

    return (
        <main>
            <div className="contact-content-container">
                <div className="contact-title-container">
                    <div className="contact-title _title">Contact us..</div>
                </div>
                <div className="form-area">
                    <form className="form_contact">
                        {/* Item 1 */}
                        <div className="firstName _form">
                            <div className="PlcContainer2">
                                    <SplitChars wrapper={<div className="plc plc2 plcName2" />}>
                                        Name
                                    </SplitChars>
                                </div>
                            <div className="container_input">
                                <input type="text" data-target="plcName1" data-target2="plcName2" name="firstName" id="firstName" className="input" 
                                    onMouseEnter={e => focusInput(e, true, nameActive)}
                                    onMouseLeave={e => focusInput(e, false, nameActive)}
                                    onFocus={() => setNameActive(true)}
                                    onBlur={(e) => {
                                        setNameActive(false)
                                        e.target.value == '' ?
                                        focusInput(e, false, false) :
                                        focusInput(e, false, true) 
                                    }}
                                    onChange={(e) => {
                                        e.target.value == '' ? setNameActive(false) : setNameActive(true) 
                                    }}
                                />
                                <div className="PlcContainer1">
                                    <SplitChars wrapper={<div className="plc plc1 plcName1" />}>
                                        Name
                                    </SplitChars>
                                </div>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="firstName _form">
                            <div className="PlcContainer2">
                                    <SplitChars wrapper={<div className="plc plc2 plcEmail2" />}>
                                        Name
                                    </SplitChars>
                                </div>
                            <div className="container_input">
                                <input type="text" data-target="plcEmail1" data-target2="plcEmail2" name="firstName" id="email" className="input" 
                                    onMouseEnter={e => focusInput(e, true, email)}
                                    onMouseLeave={e => focusInput(e, false, email)}
                                    onFocus={() => setEmail(true)}
                                    onBlur={(e) => {
                                        setEmail(false)
                                        e.target.value == '' ?
                                        focusInput(e, false, false) :
                                        focusInput(e, false, true) 
                                    }}
                                    onChange={(e) => {
                                        e.target.value == '' ? setEmail(false) : setEmail(true) 
                                    }}
                                />
                                <div className="PlcContainer1">
                                    <SplitChars wrapper={<div className="plc plc1 plcEmail1" />}>
                                        Name
                                    </SplitChars>
                                </div>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="firstName _form">
                            <div className="PlcContainer2">
                                    <SplitChars wrapper={<div className="plc plc2 plcMsg2" />}>
                                        Name
                                    </SplitChars>
                                </div>
                            <div className="container_input">
                                <input type="text" data-target="plcMsg1" data-target2="plcMsg2" name="firstName" id="firstName" className="input" 
                                    onMouseEnter={e => focusInput(e, true, msg)}
                                    onMouseLeave={e => focusInput(e, false, msg)}
                                    onFocus={() => setMsg(true)}
                                    onBlur={(e) => {
                                        setMsg(false)
                                        e.target.value == '' ?
                                        focusInput(e, false, false) :
                                        focusInput(e, false, true) 
                                    }}
                                    onChange={(e) => {
                                        e.target.value == '' ? setMsg(false) : setMsg(true) 
                                    }}
                                />
                                <div className="PlcContainer1">
                                    <SplitChars wrapper={<div className="plc plc1 plcMsg1" />}>
                                        Name
                                    </SplitChars>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="social-area">
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