import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav/Nav'
import {Switch,BrowserRouter, Route} from 'react-router-dom'
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
