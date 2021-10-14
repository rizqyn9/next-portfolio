import React, {useRef} from 'react'
import Title from '../animPart/Title'
import SkillCanvas from './SkillCanvas'
import TextReveal from '../animPart/TextReveal'
import {motion} from 'framer-motion'
import Head from 'next/head'


const Skill = () => {
    return (
        <main className="skills-container">
            <Head>
                <title>R-Dev | Skill & Experience</title>
            </Head>
            <div className="skills-content-container">
                <Title className="__title">Skills & Experience</Title>
                <br />
                <motion.div
                    className="contents-container __content"
                    variants = {{
                        hidden : {
                            opacity : 0,
                            fontSize : "1.2rem",
                        },
                        visible : {
                            opacity : 1,
                            transition : {
                                staggerChildren : .2
                            }
                        }
                    }}
                    initial = "hidden"
                    animate = "visible"
                >
                    <TextReveal>
                        As Web Developer, i'm using ReactJS as FrontEnd and some NodeJS framework Express.js or NestJS
                    </TextReveal>
                    <TextReveal>
                        In Game Development better for implementing any logic using Unity and C#
                    </TextReveal>
                    <TextReveal>
                        Have some experience using some DBMS like MongoDB, Postgre, MySQL, Redis and Elastic Search
                    </TextReveal>
                    <TextReveal>
                        Better using any linux distribution and version control
                    </TextReveal>
                    <TextReveal>
                        Have experience to create Unit Testing before Deployment use Jest
                    </TextReveal>
                    <TextReveal>
                        CI/CD for develop and deployment is better for your company
                    </TextReveal>
                    <TextReveal>
                        Now i'm learning as DevOps Enginer, Scalling apps with Docker and Kubernetes
                    </TextReveal>
                    <TextReveal>

                    </TextReveal>
                </motion.div>
            </div>
            <motion.div
                className="skill-canvas-container"
                initial={{
                    opacity:0
                }}
                animate={{
                    opacity:1,
                    transition : {
                        ease : "easeIn",
                        duration:2
                    }
                }}
            >
                <SkillCanvas />
            </motion.div>
        </main>
    )
}

export default Skill