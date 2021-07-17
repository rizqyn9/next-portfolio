import React, {useState, useEffect, useContext, useRef} from 'react'
import MousContext from '../../components/cursor/MouseContext'
import {motion} from 'framer-motion'
import Title from '../animPart/Title'


const Home = () => { 
    const {type, setType} = useContext(MousContext)

    useEffect(()=> {

    }, [])

    return(
    <motion.main 
        className="home-container"
        initial= {{
            visibility : 'hidden',
            opacity : 0
        }}
        animate={{
            visibility : 'visible',
            opacity: 1,
            transition : {
                duration: 2
            }
        }}
        exit={{
            x:'100vw'
        }}
        >
        <div className="home-title-container" >
            <motion.div className="contents-container"
                variants={{
                    hidden :{
                        
                    },
                    visible:{
                        transition:{
                            staggerChildren : 1
                        }
                    }
                }}
                animate="visible"
                initial="hidden"
            >
                <Title
                    className="title _title"
                >
                    Hello I'm Rizqy
                </Title>
                <span className="full-stack">Full-Stack</span><Title> web development</Title>
                <Title className="text line2"> based in Indonesian</Title>
            </motion.div>
        </div>
        <div className="svg-container" >
            <svg viewBox="0 0 800 600" width="100%" height="100%" >
                <symbol id="s-text">
                    <text textAnchor="middle"
                        x="50%"
                        y="25%"
                        className="text--line1"
                        >
                    WEB DEV
                    </text>
                    <text textAnchor="middle"
                        x="50%"
                        y="55%"
                        className="text--line2"
                        >
                    APP DEV
                    </text>
                    <text textAnchor="middle"
                        x="50%"
                        y="85%"
                        className="text--line3"
                        >
                    GAME DEV
                    </text>
                </symbol>
                
                    <g className="g-ants">
                    <use xlinkHref="#s-text"
                        className="text-copy"></use>     
                    <use xlinkHref="#s-text"
                        className="text-copy"></use>     
                    <use xlinkHref="#s-text"
                        className="text-copy"></use>     
                    <use xlinkHref="#s-text"
                        className="text-copy"></use>     
                    <use xlinkHref="#s-text"
                        className=""></use>
                </g> 
            </svg>
        </div>
    </motion.main>
    )
}

export default Home