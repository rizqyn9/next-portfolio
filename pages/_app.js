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
import {Provider} from 'jotai'

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
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favico/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favico/favicon-32x32.png"/>

      </Head>
      {
        isSave ? 
        (
          <Provider>
            <MouseManager>
              <Cursor/>
              {/* <LoadingPage/> */}
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </MouseManager>
          </Provider>
        ) :
        (
            alert("Sorry your browser not supported now :(")
        )
      }
    </>
  )
}

export default MyApp
