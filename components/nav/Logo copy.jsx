import {useEffect, useState} from 'react'
import {motion, useAnimation, useSpring} from 'framer-motion'

const Logo = () => {
    const anim = useAnimation()
    const [isHover, setIsHover] = useState(false)
    const springEffect = useSpring(100, {damping:25 , stiffness:700})

    useEffect(() => {
        anim.start("show")
    }, []);

    return (
        <motion.div className='logo'
            variants={{
                hidden : {
                    opacity : 0
                }, 
                show : {
                    opacity : 1,
                    scale :1,
                    transition : {
                        duration : 1
                    }
                },
            }}
            initial = 'hidden'
            animate={anim}
            onHoverStart={() => {
                anim.start('hover')
            }}
            onHoverEnd={() => {
                anim.start("show")
            }}
        >
            <div className="logo-container">
                <motion.div id="R-1" className="r-logo"

                >R</motion.div>
                <motion.div id="R-2" className="r-logo"
                    variants={{
                        hover : {
                            color:'red'
                        },
                    }}
                >R</motion.div>
            </div>
            <motion.div className="dev">DEV</motion.div>
        </motion.div>
    )
}

export default Logo