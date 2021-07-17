import AboutPage from '../components/about/about'
import {AnimatePresence, motion} from 'framer-motion'

const Home = () => {
    return (
        <AnimatePresence exitBeforeEnter>
            <AboutPage/>
        </AnimatePresence>
    )
}

export default Home