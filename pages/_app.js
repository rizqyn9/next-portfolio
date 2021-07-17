import '/styles/globals.scss'
import React, { createContext, useEffect, useState } from 'react'
import Layout from './components/layout'
import Head from 'next/head'
import {motion ,AnimatePresence} from 'framer-motion'
import NProgress from 'nprogress'
import Router from 'next/router'
import LoadingPage from '../components/loading/LoadingPage'
import Cursor from '../components/cursor/cursor'
// import CursorManager from '../context/CursorManager'
import MouseManager from '../components/cursor/MouseManager'

function MyApp({ Component, pageProps, router }) {
  const [isSave, setIsSave] = useState(true)

  useEffect(() => {
    let vwUser = {
      width : window.innerWidth,
      height : window.innerHeight
    }
    setIsSave(vwUser.height < vwUser.width)
  },[])

  return (
    <>
      <Head>
        <script type="text/javascript" src="test.js"></script>
      </Head>
      {
        isSave ? 
        (
          <MouseManager>
            <Cursor/>
            {/* <LoadingPage/> */}
            <Layout>
              <Component {...pageProps} />
            </Layout>
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
