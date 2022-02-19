import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

Home.getInitialProps = (ctx) => {
    let isMobileView = (ctx.req
        ? ctx.req.headers['user-agent']
        : navigator.userAgent).match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )

    let deviceInfo = ctx.req.headers['user-agent']

    return {
        deviceInfo: deviceInfo
    }
  }

function Home({deviceInfo}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>ColdenDev - Drop That Box</title>
        <meta name="description" content="Drop That Box - mobile game developed by ColdenDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{deviceInfo}</h1>

    </div>
  )
}

export default Home