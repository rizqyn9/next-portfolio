import {motion} from 'framer-motion'

const SocialList = (props) => {
    const {data, index} = props
    return(
        <motion.li className="navigation-item item1" key={`${data.Title}-${index}`}
            variants={{
                hidden : {
                    opacity : 0,
                },
                show : {
                    opacity:1,
                    transition : {
                        duration : .4,
                    }
                }
            }}
        >
            <motion.a className="navigation-link navigation-link-1" href={data.Link} target="_blank"
                variants={{
                    hidden : {
                        height : '0%',
                        overflow : 'hidden'
                    },
                    show : {
                        height : '100%'
                    }
                }}
            >
                <motion.span data-text={data.Title} 
                    variants={{
                        hidden : {
                            y : '-20rem',
                            x: '5rem',
                            display : 'inline-block',
                            rotateZ : 40
                        },
                        show : {
                            rotateZ : 0,
                            motionRotation: '0',
                            x : 0,
                            y : 0,
                            transition : {
                                duration : 1,

                            }
                        }
                    }}
                >
                    {data.Title}
                </motion.span>
            </motion.a>
        </motion.li>
    )
}

export default  SocialList