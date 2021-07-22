import AboutPage from '../components/about/about'
import Head from 'next/head'
import {AnimatePresence, motion} from 'framer-motion'

const Home = () => {
    return (
        <AnimatePresence exitBeforeEnter>
            <Head>
                <title>R-Dev | About</title>
            </Head>
            <AboutPage/>
        </AnimatePresence>
    )
}

export default Home