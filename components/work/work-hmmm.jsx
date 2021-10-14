import React, {useEffect, useRef, useState} from 'react'
import {ParallaxProvider} from 'react-scroll-parallax'
import FigureGallery from './figureGallery'
import {
    motion,
    useViewportScroll,
    useTransform,
    useSpring,
} from 'framer-motion'
import {data} from '../../dataConfig'

const Work = () => {
    return(
        <main className="works-container">
            <ParallaxProvider
                scrollAxis="horizontal"
                y="200%"
            >
                <motion.section
                    className="works-content-container"
                >
                    <div className="content">
                        <div className="gallery">
                            <div className="gallery__text">
                                
                                <span className="gallery__text-inner" data-scroll data-scroll-speed="3">2020</span>
                                <span data-scroll data-scroll-speed="1" className="gallery__text-inner">2021</span>
                            </div>
                            {
                                data.map((val,i) => {
                                    return <FigureGallery Image={val.Image} Title={val.Title} Index={i+1} Tags={val.Tags} key={val.Title}/>
                                })
                            }
                            <div className="gallery__text">
                                <span className="gallery__text-inner" data-scroll data-scroll-speed="3">R -</span>
                                <span data-scroll data-scroll-speed="1" className="gallery__text-inner">Dev</span>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </ParallaxProvider>
        </main>
    )
}

export default Work