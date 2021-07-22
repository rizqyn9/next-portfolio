import {motion} from 'framer-motion'

const Title = (props) => {
    const {children, className, childClass } = props

    return(
        <motion.div
            className={`${className ? className : ''}`}
            variants={{
                hidden : {
                },
                visible : {
                    transition : {
                        delay:2,
                        staggerChildren : .03
                    }
                }
            }}
            initial="hidden"
            animate="visible"
        >
            {
                children.split("").map((char, index) => {
                    return(
                        <div
                            key={"char-"+index}
                            style={{
                                display:'inline-block',
                                overflow:'hidden',
                            }}
                        >
                            <motion.span
                                variants = {{
                                    hidden : {
                                        minWidth : '.4em',
                                        display : 'inline-block',
                                        x:'-3vw'
                                    },
                                    visible : {
                                        x: '0',
                                        transition:{
                                            duration: 1
                                        }
                                    }
                                }}
                            >
                                {char}
                            </motion.span>
                        </div>
                    )
                })
            }
        </motion.div>
    )
}

export default Title