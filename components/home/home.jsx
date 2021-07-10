import React, {useState, useEffect, useContext, useRef} from 'react'
import MousContext from '../../components/cursor/MouseContext'
import {gsap, Power0, Power1, Power2, Power3} from 'gsap'

const Home = () => { 
    const {type, setType} = useContext(MousContext)

    useEffect(()=> {

    }, [])

    return(
    <main className="home-container">
        <div className="home-title-container">
            <div className="home-title" >
                <div className="title _title">Hello</div>
                <div className="title _title">I'm</div>
                <div className="title _title">Rizqy</div>
            </div>
            <div className="contents-container" >
                <div className="text line1" ><span className="full-stack">Full-Stack</span> web development</div>
                <div className="text line2"> based in Indonesian</div>
            </div>
        </div>
        <div className="svg-container">
            <svg viewBox="0 0 800 600">
                <symbol id="s-text">
                    <text textAnchor="middle"
                        x="50%"
                        y="25%"
                        className="text--line1"
                        >
                    UI / UX
                    </text>
                    <text textAnchor="middle"
                        x="50%"
                        y="55%"
                        className="text--line2"
                        >
                    WEB DEV
                    </text>
                    <text textAnchor="middle"
                        x="50%"
                        y="85%"
                        className="text--line3"
                        >
                    APP DEV
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
    </main>
    )
}

export default Home