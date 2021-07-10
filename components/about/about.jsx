import React, {useEffect} from 'react'
import GlobeThree from './globeThree'
import {SplitChars, Controls, PlayState, Timeline, Tween, Reveal } from 'react-gsap'
import Container from '../container/container'
import { gsap } from "gsap";

// import Splitting from 'splitting'
const About = () => {
    useEffect ( () => {
        // gsap.from('.line',2,{
        //     // y: 200,
        //     ease: "power4.out",
        //     // delay: 0,
        //     // skewY: 10,
        //     stagger: {
        //         amount: .9,
        //     },
        // })
        // gsap.from('.globe-canvas', 2,{
        //     opacity:0,
        //     right:'70vw',
        // })
    }, [])
    
    return(
        <main className="about-container">
            <div className="about-content-container">       
                <div className="title">
                    <Tween 
                        from={{x:'1vw', overflow:'hidden', ease: "power4.out", opacity:0,  backgroundColor:'cyan', borderRadius:'50%'}}
                        stagger={'.08'}
                    >
                        <SplitChars
                            wrapper={<div className="wrapper __title" style={{display:'inline-block'}}/>}
                        >
                            About me.
                        </SplitChars>
                    </Tween>
                </div>  
                <div className="about-contents __content">
                    <div className="line-rev"><span>Hi I’m Rizqy Prastya.</span></div>
                    <div className="line-rev"><span>a 20 years old </span></div>
                    <div className="line-rev"><span>Indonesian Student in Game Dev Multimedia Training Centre University</span></div>
                    <div className="line-rev"><span>I’m currently working as freelance </span></div>
                    <div className="line-rev"><span>Full Stack Web Dev based in Indonesian.</span></div>
                </div>
                <div className="about-contents">
                    <div className="line-rev"><span>I love bending the rules of CSS, </span></div>
                    <div className="line-rev"><span>and playing with WebGL or ThreeJS</span></div>
                    <div className="line-rev"><span>I have experience with style code at scale,</span></div>
                    <div className="line-rev"><span>and strong knowledge as a backend developer,</span></div>
                </div>
            </div>
            <div className="globe-container">
                <GlobeThree/>
            </div>
        </main>
    )
}

export default About