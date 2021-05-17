import React, {useEffect} from 'react'

const FigureGallery = ({children, Image, Title, Tags, Index}) => {
    return(
        <>
        <figure className="gallery__item">
            <div className="gallery__item-img"><div className="gallery__item-imginner" style={{backgroundImage: `url(${Image})`}} data-scroll data-scroll-speed="-0.8"></div></div>
            <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll data-scroll-speed="1">{Title}</h2>
                <span className="gallery__item-number" data-scroll data-scroll-speed="1.5">{Index}</span>
                <p className="gallery__item-tags">
                    {
                        Tags !== undefined ? 
                        Tags.map((el, i) => {
                            return <span>#{el}</span>
                        }) :
                        null
                    }
                </p>
                {/* <a className="gallery__item-link">view project</a> */}
            </figcaption>
        </figure>
        </>
    )
}

export default FigureGallery