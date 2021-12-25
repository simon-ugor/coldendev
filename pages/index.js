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
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </div>
          </Link>

          <Link href="/ourgames">
            <div className={styles.card} style={{cursor: "pointer"}}>
              <h2>Our Games</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </div>
          </Link>

          <Link href="/contactus">
            <div className={styles.card} style={{cursor: "pointer"}}>
              <h2>Contact Us</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </div>
          </Link>

          <Link href="/socialmedia">
            <div className={styles.card} style={{cursor: "pointer"}}>
              <h2>Social Media</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </div>
          </Link>

        </div>
      </main>
    </div>
  )
}
