import '/styles/globals.scss'
import Layout from './components/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <script type="text/javascript" src="test.js"></script>
    </Head>

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

export default MyApp
