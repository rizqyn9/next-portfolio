import React, {useEffect, useRef} from 'react'
import FigureGallery from './figureGallery'
import {data} from '../../dataConfig'
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
        <div className="works">
        <main className="works-container" style={{color:"white"}}>
                <div className="works-content-container" ref={scroller}>
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
                </div>
            </main>
        </div>
    )
}

export default Work