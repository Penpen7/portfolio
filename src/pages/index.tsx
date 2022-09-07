import Head from 'next/head'
import Header from '../components/Header'
import MyImage from '../components/MyImage'
import styles from '../styles/Home.module.css'

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>naoki portfolio</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <MyImage />
      </main>
    </>
  )
}

export default Home
