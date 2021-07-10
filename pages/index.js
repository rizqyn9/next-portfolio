import Home from '../components/home/home'
import {motion} from 'framer-motion'
// import LoadingPage from '../components/loading/LoadingPage'

export default function index() {
  return (
    <motion.div exit={{opacity:0}}>
      {/* <LoadingPage/> */}
      <Home/>
    </motion.div>
  )
}
