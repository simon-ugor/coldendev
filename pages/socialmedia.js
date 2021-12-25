import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ColdenDev - Social Media</title>
        <meta name="description" content="Official social media pages of ColdenDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Social Media
        </h1>

        <br/><br/><br/>

        <div className={styles.grid}>

        </div>
      </main>
    </div>
  )
}
