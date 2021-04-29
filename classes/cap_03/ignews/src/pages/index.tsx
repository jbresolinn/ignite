import Head from 'next/head'
import styles from '../styles/pages/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news | home</title>
      </Head>
      <div className={styles.container}>
        <h1>hello world</h1> 
      </div>
    </>
  )
}
