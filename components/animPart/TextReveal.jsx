import {motion} from 'framer-motion'

const TextReveal = (props) => {
    const {children} = props

    return (
        <div
            className ="text-reveal"
            style={{
                overflow:'hidden'
            }}
        >
            <motion.div
                variants = {{
                    hidden : {
                        height : 'max-content',
                        overflow : 'hidden',
                        y: "5vh",
                        skewX:'-100deg',
                        rotateX : '45deg',
                    },
                    visible : {
                        y:0,
                        skewX:0,
                        rotateX : '0',
                        transition : {
                            duration : 1,

                        }
                    }
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default TextReveal