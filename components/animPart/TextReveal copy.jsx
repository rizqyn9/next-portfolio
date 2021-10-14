import {motion} from 'framer-motion'

const TextReveal = (props) => {
    const {children} = props

    return (
        <motion.div
            variants = {{
                hidden : {
                    opacity : 0,
                    height : 'max-content',
                    overflow : 'hidden',
                    transition: {
                        staggerChildren :1
                    }
                },
                visible : {
                    opacity : 1,
                    transition : {
                        staggerChildren : .02
                    }
                }
            }}
        >
            {
                children.split("").map((char, index) => {
                    return(
                        <motion.span
                            key={"char-"+index}
                            variants = {{
                                hidden : {
                                    opacity : 0,
                                    minWidth : '.3em',                                  
                                    display : 'inline-block',
                                    y:'100%'
                                },
                                visible : {                            
                                    opacity : 1,
                                    y:0

                                }
                            }}
                        >
                            {char}
                        </motion.span>
                    )
                })
            }
        </motion.div>
    )
}

export default TextReveal