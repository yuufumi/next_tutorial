import styles from '../styles/Home.module.css' 
import Head from 'next/head'

const About = () => {
    return (
        <>
        <Head>
           <title>User list | About</title>
           <meta name="keywords" content="ninjas"/>
        </Head>
        <div>
        <h1 className={styles.text}>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo deleniti, eius placeat praesentium eveniet quam distinctio earum excepturi voluptatum molestiae voluptas minus doloribus optio id fugiat, quas deserunt error? Rem?</p>
        
        </div>
        </>
      );
}
 
export default About;