import {motion} from 'framer-motion'

const Title = (props) => {
    const {children, className, childClass } = props

    return(
        <motion.div
            className={`${className ? className : ''}`}
            variants={{
                hidden : {
                    opacity : 0
                },
                visible : {
                    opacity : 1,
                    transition : {
                        staggerChildren : .1
                    }
                }
            }}
            initial="hidden"
            animate="visible"
        >
            {
                children.split("").map((char, index) => {
                    return(
                        <motion.span
                            key={"char-"+index}
                            variants = {{
                                hidden : {
                                    opacity : 0,
                                    minWidth : '.5em',
                                    display : 'inline-block',
                                    scale : 0
                                },
                                visible : {
                                    opacity : 1,
                                    scale : 1
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

export default Title