import React, {useEffect} from 'react'
import GlobeThree from './globeThree'
import Title from '../animPart/Title'
import TextReveal from '../animPart/TextReveal'
import { motion, motionValue } from 'framer-motion'
import {MySelf} from '../../dataConfig'

const About = () => {
    useEffect ( () => {
    }, [])
    
    return(
        <main className="about-container">
            <div className="about-content-container ">       
                <Title className="__title">About Me</Title>
                <motion.div
                    className ="__content"
                    variants = {{
                        hidden : {
                            opacity : 0,
                            transition: {
                                staggerChildren :1
                            }
                        },
                        visible : {
                            opacity : 1,
                            transition : {
                                staggerChildren : .1
                            }
                        }
                    }}
                    initial = "hidden"
                    animate = "visible"
                    exit="hidden"
                >
                    <br/>
                    <TextReveal>My name Rizqy Prastya Ari Nugroho.</TextReveal>
                    <TextReveal>Any people can call me Rizqy.</TextReveal>
                    <TextReveal>a {MySelf.age} years old </TextReveal>
                    <TextReveal>Indonesian Student in Game Dev Multimedia Training Centre University</TextReveal>
                    <TextReveal>I’m currently working as freelancer and CEO of R-Dev Studio</TextReveal>
                    <br/>
                    <TextReveal>Full Stack Web Dev based in Indonesian.</TextReveal>
                    <TextReveal>I'm great at implementing game logic.</TextReveal>
                    <TextReveal>Currently im focused to be DevOps Enginer.</TextReveal>
                    <TextReveal>Scalling and optimation is my purpose</TextReveal>
                </motion.div>
            </div>
            <motion.div
                className="globe-container"
                initial={{
                    opacity:0,
                }}
                animate={{
                    opacity:1,
                    transition:{
                        duration : 3,
                        ease:'easeInOut'
                    }
                }}
            >
                <GlobeThree/>
            </motion.div>
        </main>
    )
}

export default About