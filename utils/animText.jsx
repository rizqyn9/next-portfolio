import {gsap} from 'gsap'
import React, {useEffect} from 'react'
export const AnimText = ({children}) => {
    return(
        <div className="line-rev">
            <span className="line">
                {children}
            </span>
        </div>
    )
}

