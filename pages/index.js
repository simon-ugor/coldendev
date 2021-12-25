import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ColdenDev</title>
        <meta name="description" content="ColdenDev official website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="link to app store here">ColdenDev!</a>
        </h1>

        <br/><br/><br/>

        <div className={styles.grid}>

          <Link href="/aboutus">
            <div className={styles.card} style={{cursor: "pointer"}}>
              <h2>About Us</h2>
              <p>Learn more about ColdenDev, our projects and future plans.</p>
            </div>
          </Link>

          <Link href="/ourgames">
            <div className={styles.card} style={{cursor: "pointer"}}>
              <h2>Our Games</h2>
              <p>Discover, try and enjoy games developed by ColdenDev.</p>
            </div>
          </Link>

          <Link href="/contactus">
            <div className={styles.card} style={{cursor: "pointer"}}>
              <h2>Contact Us</h2>
              <p>Contact us for any questions or troubleshooting.</p>
            </div>
          </Link>

          <Link href="/privacypolicy">
            <div className={styles.card} style={{cursor: "pointer"}}>
              <h2>Privacy Policy</h2>
              <p>Privacy Policy and legal information for users of our products.</p>
            </div>
          </Link>

        </div>
      </main>
    </div>
  )
}
