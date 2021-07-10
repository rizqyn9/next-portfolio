import '/styles/globals.scss'
import React, { createContext, useEffect, useState } from 'react'
import Layout from './components/layout'
import Head from 'next/head'
import {AnimatePresence} from 'framer-motion'
import NProgress from 'nprogress'
import Router from 'next/router'
import {gsap} from 'gsap'
import LoadingPage from '../components/loading/LoadingPage'
import Cursor from '../components/cursor/cursor'
// import CursorManager from '../context/CursorManager'
import MouseManager from '../components/cursor/MouseManager'


NProgress.configure({showSpinner: false })
Router.onRouteChangeStart = () => {
  console.log('onRouteChangeStart triggered')
  gsap.to('#loading', {
    visibility: 'visible',
    opacity:1,
    left:0,
    top:0
  })
  setTimeout(
    () => {
      NProgress.start()
    }, 4000
  )
};


Router.onRouteChangeComplete = () => {
  console.log('onRouteChangeComplete triggered');
    gsap.to('#loading', {
      opacity: 0,
      left:'-100vw',
      top:0
    })
    setTimeout(
      () => {
        NProgress.done();
      }, 2000
    )
};

Router.onRouteChangeError = () => {
  console.log('onRouteChangeError triggered');
  NProgress.done();
};


function MyApp({ Component, pageProps }) {
  const [isSave, setIsSave] = useState(true)

  useEffect(() => {
    let vwUser = {
      width : window.innerWidth,
      height : window.innerHeight
    }
    setIsSave(vwUser.height < vwUser.width)
  })

  return (
    <>
      <Head>
        <script type="text/javascript" src="test.js"></script>
      </Head>
      {
        isSave ? 
        (
          <MouseManager>
            <LoadingPage/>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <Cursor/>
          </MouseManager>
        ) :
        (
            alert("Sorry your browser not supported now :(")
        )
      }
    </>
  )
}

export default MyApp
