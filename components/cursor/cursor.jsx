import React, {useRef, useContext, useEffect, useState} from 'react'
import MouseContext from '../cursor/MouseContext'
import { motion, useMotionValue, useSpring,  } from 'framer-motion'

const Cursor = () => {
    const {type, eventProp} = useContext(MouseContext)
    const smallCursor = useRef()
    const largeCursor = useRef()

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const cursorXLarge = useMotionValue(-100);
    const cursorYLarge = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorXLarge, springConfig);
    const cursorYSpring = useSpring(cursorYLarge, springConfig);

    useEffect(() => {
        const largeSize = {
            x : largeCursor.current.offsetWidth,
            y : largeCursor.current.offsetWidth
        }
        const smallSize = {
            x : smallCursor.current.offsetWidth,
            y : smallCursor.current.offsetWidth
        }
        const moveCursor = (e) => {
          cursorX.set(e.clientX - 5);
          cursorY.set(e.clientY - 5);
          cursorXLarge.set(e.clientX - 40);
          cursorYLarge.set(e.clientY - 40);
        };
    
        window.addEventListener("mousemove", moveCursor);
    
        return () => {
          window.removeEventListener("mousemove", moveCursor);
        };
    }, []);
    


    return(
        <>
            <motion.div
                className="cursor-small"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                }}
                ref={smallCursor}
            />
            <motion.div
                className="cursor-large"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
                ref={largeCursor}
            />
        </>
    )
}

export default Cursor