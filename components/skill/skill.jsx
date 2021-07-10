import React, {useRef} from 'react'
import Title from '../animPart/Title'
import SkillCanvas from './SkillCanvas'
import TextReveal from '../animPart/TextReveal'
import {motion} from 'framer-motion'


const Skill = () => {
    return (
        <main className="skills-container">
            <div className="skills-content-container">
                <Title className="__title">Skills & Experience</Title>
                <br />
                <motion.div
                    className="contents-container __content"
                    className ="__content"
                    variants = {{
                        hidden : {
                            opacity : 0
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
                >
                    <TextReveal>
                        Motivated junior web developer looking for a role as full-stack.
                    </TextReveal>
                    <TextReveal>
                        Motivated junior web developer looking for a role as full-stack.
                    </TextReveal>
                    <TextReveal>
                        In web development better to using HTML, CSS, JS, custom plugins, GSAPP, interactive layout and many library
                    </TextReveal>
                    <TextReveal>
                        In apps development focused in C++, C# and Python
                    </TextReveal>
                    <TextReveal>
                        I have also full-stack developer experience with some companies in web and apps development
                    </TextReveal>
                </motion.div>
            </div>
            <div className="skill-canvas-container">
                <SkillCanvas />
            </div>
        </main>
    )
}

export default Skill