import {useEffect, useState} from 'react'
import {motion, useAnimation, useSpring} from 'framer-motion'
import {useRouter} from 'next/router'

const Logo = () => {
    const Router = useRouter()
    const anim = useAnimation()
    const springEffect = useSpring(100, {damping:25 , stiffness:700})

    useEffect(() => {

    },[])

    return (
        <motion.div className="logo" 
            initial="hidden"
            animate="show"
            variants={{
                hidden : {
                    opacity : 0,
                },
                show : {
                    opacity : 1, 
                    transition : {
                        duration :1
                    }
                },
                hover : {
                }
            }}
            whileHover="hover"
        >
            <motion.div className="svg-container">
                <motion.svg height="100%" width="100%" viewBox="0 0 50 50" className="">
                    <motion.text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
                        variants={{
                            show :{
                                strokeDasharray : 0,
                            },
                            hover:{
                                strokeDasharray:"100%",
                                strokeWidth : 2,
                                scale:1.3
                            }
                        }}
                    >R
                    </motion.text>
                    <motion.text id="svg-core" x="42%" y="45%" textAnchor="middle" dominantBaseline="middle"
                        variants={{
                            show:{
                                stroke:'none'
                            }
                        }}
                    >R
                    </motion.text>
                </motion.svg>  
            </motion.div>
            <motion.div className="dev-container">
                DEV
            </motion.div>
        </motion.div>
    )
}

export default Logo