import {SplitChars, Controls, PlayState, Timeline, Tween, Reveal } from 'react-gsap'
import Container from '../container/container'
import {Canvas} from '@react-three/fiber'
import React, {useRef} from 'react'
import Bubble from '../spher'
import SkillCanvas from './SkillCanvas'


const Skill = () => {
    const mesh = useRef()
    return (
        <main className="skills-container">
            <div className="skills-content-container">
                <div className="skills-title-container __title">
                    <Tween 
                        from={{x:'1vw', overflow:'hidden', ease: "power4.out", opacity:0,  backgroundColor:'cyan', borderRadius:'50%'}}
                        stagger={'.05'}
                    >
                        <SplitChars
                            wrapper={<div className="wrapper" style={{display:'inline-block'}}/>}
                        >
                            Skills & Experience.
                        </SplitChars>
                    </Tween>
                </div>
                <div className="contents-container __content">
                    <div className="about-contents _content">
                        Motivated junior web developer looking for a role as full-stack.
                        The main expertise as front-end development (client-side)
                    </div>
                    <div className="about-contents _content">
                        In web development better to using HTML, CSS, JS, custom plugins, GSAPP, interactive layout and many library
                    </div>
                    <div className="about-contents _content">
                        In apps development focused in C++, C# and Python
                    </div>
                    <div className="about-contents _content">
                        I have also full-stack developer experience with some companies in web and apps development
                    </div>
                </div>
            </div>
            {/* <Canvas>
                <mesh 
        ref={mesh}
                >
                    <Bubble/>
                    <ambientLight intensity="0.5"/>
                    <directionalLight color={"cyan"} position={[10, 10, 5]} intensity={5} />
                    <pointLight color={"darkBlue"} position={[0, -10, 5]} intensity={10} />
                </mesh>
            </Canvas> */}
            <SkillCanvas />
        </main>
    )
}

export default Skill