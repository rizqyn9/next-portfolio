import React, {useEffect, useRef} from 'react'
import FigureGallery from './figureGallery'
import {motion} from 'framer-motion'
import {data} from '../../dataConfig'
import SvgDash from '../animPart/SvgDash'
import Head from 'next/head'

const Work = () => {
    const scroller = useRef()
    useEffect(()=> {
        (async () => {
            try {
              const LocomotiveScroll = (await import('locomotive-scroll')).default

                new LocomotiveScroll({
                    el: scroller.current,
                    smooth: true,
                    direction: 'horizontal'
                })
            } catch (error) {
            //   throw Error(`[SmoothScrollProvider]: ${error}`)
            console.log(error);
            }
          })()
    }, [])
    return(
        <main className="works-container" style={{color:"white"}}>
            <Head>
                <title>R-Dev | Work</title>
            </Head>
            <motion.div className="works-content-container" ref={scroller}
                variants={{
                    hidden:{
                        opacity:0
                    },
                    visible:{
                        opacity:1,
                        transition : {
                            duration:1,
                            staggerChildren:2
                        }
                    }
                }}
                initial="hidden"
                animate="visible"
            >
                <div className="content">
                    <div className="gallery">
                        <div className="gallery__text"><span className="gallery__text-inner" data-scroll data-scroll-speed="3">2020</span><span data-scroll data-scroll-speed="1" className="gallery__text-inner">2021</span></div>
                        {
                            data.map((val,i) => {
                                return <FigureGallery Image={val.Image} Title={val.Title} Index={i+1} Tags={val.Tags} key={val.Title}/>
                            })
                        }
                        <div className="gallery__text"><span className="gallery__text-inner" data-scroll data-scroll-speed="3">R -</span><span data-scroll data-scroll-speed="1" className="gallery__text-inner">Dev</span></div>
                    </div>
                </div>
            </motion.div>
        </main>
    )
}

export default Work