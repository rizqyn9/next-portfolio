import React, {useRef, useContext, useEffect, useState} from 'react'
import {gsap, Power1} from 'gsap'
import MouseContext from '../cursor/MouseContext'

const Cursor = () => {
    const {type, eventProp} = useContext(MouseContext)
    const CursorSmall = useRef()
    const CursorLarge = useRef()
    const LargeAnim = useRef()
    const SmallAnim = useRef()
    const SetSmall = useRef({
        x : 0,
        y : 0
    })
    const SetLarge = useRef({
        x : 0,
        y : 0,
    })
    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: 1
      });

      // ! Set Box Bounding Cursor
      useEffect(() => {
          SetSmall.current.x = CursorSmall.current.clientWidth /2
          SetSmall.current.y = CursorSmall.current.clientHeight / 2
          SetLarge.current.x = CursorLarge.current.clientWidth / 2
          SetLarge.current.y = CursorLarge.current.clientHeight / 2

    }, [])

    useEffect(() => {
        const updatePos = (e) => {
            positionRef.current.mouseX = e.clientX
            positionRef.current.mouseY = e.clientY
        }
        document.addEventListener('mousemove', updatePos)
        document.addEventListener('pointerdown', () => {
            console.log('====================================');
            console.log("click");
            console.log('====================================');
            LargeAnim.current = gsap.to(CursorLarge.current , {
                background:"red",
                paused:true
            })
            LargeAnim.current.play()
        })
        document.addEventListener('mousedown', () => {
            gsap.to(CursorLarge.current, {
                background:"blue"
            })
        })

        return () => {
            document.removeEventListener('mousemove', updatePos)
        }
    },[type])

    // ! Cursor state
    useEffect(() => {
        const render = () => {
            if(type === "nav"){
                SmallAnim.current = gsap.to(CursorSmall.current, {
                    x: positionRef.current.mouseX,
                    y: positionRef.current.mouseY,
                    background:'red',
                    borderRadius:'50%',
                    scale:3,
                    paused:true
                })
                LargeAnim.current = gsap.to(CursorLarge.current, {
                    background:'red',
                    borderRadius: "0",
                    x : positionRef.current.mouseX - SetLarge.current.x,
                    y : positionRef.current.mouseY - SetLarge.current.y,
                    paused:true
                })
                LargeAnim.current.play()
                SmallAnim.current.play()
            } else if (type === "default") {
                SmallAnim.current = gsap.set(CursorSmall.current, {
                    x: positionRef.current.mouseX,
                    y: positionRef.current.mouseY,
                    background:'cyan',
                    borderRadius:'50%',
                    scale:1,
                    paused:true,
                })
                LargeAnim.current = gsap.to(CursorLarge.current, {
                    background:'none',
                    borderRadius: "50%",
                    x : positionRef.current.mouseX - SetLarge.current.x,
                    y : positionRef.current.mouseY - SetLarge.current.y,
                    paused:true
                })
                LargeAnim.current.play()
                SmallAnim.current.play()
            }
            positionRef.current.key = requestAnimationFrame(render)
        }
        render()
    }, [type])


    // const CursorDefault = () => {
    //     gsap.to(CursorLarge.current, {
    //         duration: .2,
    //         x: mouseX - CursorLarge.current.clientWidth / 2,
    //         y: mouseY - CursorLarge.current.clientHeight / 2,
    //         background:"none"
    //     })
    //     gsap.set(CursorSmall.current, {
    //         x: mouseX,
    //         y: mouseY
    //     })
    // }

    // const CursorNavEnter = () => {
    //     gsap.to(CursorLarge.current, {
    //         duration: .2,
    //         x: mouseX - CursorLarge.current.clientWidth / 2,
    //         y: mouseY - CursorLarge.current.clientHeight / 2,
    //         background:"red"
    //     })
    //     gsap.set(CursorSmall.current, {
    //         x: mouseX,
    //         y: mouseY
    //     })
    // }

    return(
        <>
            <div className="cursor" ref={CursorLarge} ></div>
            <div className="cursor-small" ref={CursorSmall}></div>
        </>
    )
}

export default Cursor