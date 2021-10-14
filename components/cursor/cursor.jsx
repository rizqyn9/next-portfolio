import React, {useRef, useContext, useEffect, useState} from 'react'
import MouseContext, {MouseStateJot} from '../cursor/MouseContext'
import { motion, useMotionValue, useSpring,  useAnimation } from 'framer-motion'
import {atom, useAtom} from 'jotai'

const Cursor = () => {
    // const {type, eventProp} = useContext(MouseContext)
    const largeAnim = useAnimation()
    const smallAnim = useAnimation()
    const [type] = useAtom(MouseStateJot)
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
          cursorX.set(e.clientX);
          cursorY.set(e.clientY);
          cursorXLarge.set(e.clientX - 40);
          cursorYLarge.set(e.clientY - 40);
        };
    
        window.addEventListener("mousemove", moveCursor);
    
        return () => {
          window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    useEffect(() => {
        console.log("changed");
        switch (type) {
            case "figure":
                smallAnim.start('figure')
                largeAnim.start('figure')
                break;
                
            default:
                smallAnim.start('none')
                largeAnim.start('none')                    
                break;
        }


    }, [type])

    return(
        <>
            <motion.div
                animate = {smallAnim}
                className={`cursor-small`}
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                }}
                ref={smallCursor}
                initial = 'none'
                transition ={{
                    duration :.2,
                    easings : 'easeInOut'
                }}
                variants ={{
                    none : {
                        scale : .1
                    },
                    figure : {
                        scale : 1,
                    },
                    nav : {

                    }
                }}
            />
            
            <motion.div
                animate = {largeAnim}
                className={`cursor-large`}
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
                ref={largeCursor}
                initial = 'none'
                transition ={{
                    duration :.2,
                    easings : 'easeInOut'
                }}
                variants ={{
                    none : {
                        background : 'none',
                        scale : 1
                    },
                    figure : {
                        background :'red',
                        scale : 0
                    }
                }}
            />
        </>
    )
}

export default Cursor