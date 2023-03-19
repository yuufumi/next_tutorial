import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
export default function Home() {
  return (
  <>
   <Head>
      <title>User list | Home</title>
      <meta name="keywords" content="ninjas"/>
   </Head>
  <div className={styles.container}>
  <h1 className={styles.title}>HomePage</h1>
  <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, natus. Recusandae dolorem natus, nobis quibusdam accusamus facere dolorum placeat illo reprehenderit cupiditate dolor quod dicta nostrum, ipsa officiis dignissimos excepturi!</p>
  <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, natus. Recusandae dolorem natus, nobis quibusdam accusamus facere dolorum placeat illo reprehenderit cupiditate dolor quod dicta nostrum, ipsa officiis dignissimos excepturi!</p>
  <Link href="/users">
    <p className={styles.btn}>See users Listing</p>
  </Link>
  </div>
  </>
  )
}
