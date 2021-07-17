import React, {useEffect} from 'react'
import GlobeThree from './globeThree'
import Title from '../animPart/Title'
import TextReveal from '../animPart/TextReveal'
import { motion, motionValue } from 'framer-motion'

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
                                staggerChildren : .5
                            }
                        }
                    }}
                    initial = "hidden"
                    animate = "visible"
                    exit="hidden"
                >
                    <TextReveal>Hi I’m Rizqy Prastya.</TextReveal>
                    <TextReveal>a 20 years old </TextReveal>
                    <TextReveal>Indonesian Student in Game Dev Multimedia Training Centre University</TextReveal>
                    <TextReveal>I’m currently working as freelance</TextReveal>
                    <TextReveal>Full Stack Web Dev based in Indonesian.</TextReveal>
                    <TextReveal> love bending the rules of CSS, </TextReveal>
                    <TextReveal>and playing with WebGL or ThreeJS</TextReveal>
                    <TextReveal>I have experience with style code at scale,</TextReveal>
                    <TextReveal>and strong knowledge as a backend developer,</TextReveal>
                </motion.div>
            </div>
            <div className="globe-container">
                <GlobeThree/>
            </div>
        </main>
    )
}

export default About