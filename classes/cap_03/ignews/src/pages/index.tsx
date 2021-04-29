import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton';
import styles from '../styles/pages/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news | home</title>
      </Head>
      <main className={styles.container}>
        <section>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br /> 
            <span>for $9.90/month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="girl coding image"/>
      </main>
    </>
  )
}
