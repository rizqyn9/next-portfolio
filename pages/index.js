import Home from '../components/home/home'
import {motion} from 'framer-motion'
// import LoadingPage from '../components/loading/LoadingPage'

export default function index() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
          transition:{
            delay:5
          }
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      {/* <LoadingPage/> */}
      <Home/>
    </motion.div>
  )
}
