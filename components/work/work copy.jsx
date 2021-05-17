import React, {useEffect, useRef} from 'react'
import FigureGallery from './figureGallery'
import {} from 'gsap/ScrollTrigger'
import gsap from 'gsap'

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
                            <FigureGallery Image="/works/4.png" Title="Test1" Index='1' Tags={["haha", "nodejs", "php"]}/>
                            <FigureGallery Image="/works/1.png" Title="Test1" Index='1' Tags={["haha", "nodejs", "php"]}/>
                            <FigureGallery Image="/works/2.png" Title="Test1" Index='1' Tags={["haha", "nodejs", "php"]}/>
                            <FigureGallery Image="/works/2.png" Title="Test1" Index='1' Tags={["haha", "nodejs", "php"]}/>
                            <div className="gallery__text"><span className="gallery__text-inner" data-scroll data-scroll-speed="3">Deasil</span><span data-scroll data-scroll-speed="1" className="gallery__text-inner">Zetetic</span></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Work