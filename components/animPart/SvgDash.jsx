import {motion} from 'framer-motion'

const SvgDash = (props) => {
    const {children} = props

    return(
        <motion.svg width="100%" height='100%' viewBox="0 0 400 100"
            className="svg-years"
            strokeWidth="2"
            >
            <motion.text textAnchor="middle" x="50%" y="50%"
                className="text"
                fontSize="10rem"
                fill="none"
                initial={{
                    strokeDasharray:200,
                }}
                animate={{
                    strokeDasharray:0,
                    transition:{
                        duration:1
                    }
                }}
            >
            {children}
            </motion.text>
        </motion.svg>
    )
}

export default SvgDash