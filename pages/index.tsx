import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <h1 className={'text-white text-center text-4xl mb-8 font-bold'}>
        Sorry, we&apos;re doing some work on the site
      </h1>
      <p className={'text-white text-center text-xl mb-8'}>
        Thank you for being patient. We are doing some work on the site and will be back shortly.
      </p>
      <nav className={'grid grid-flow-col justify-center gap-3.5'}>
        {/*<a href={'https://facebook.com/'}>*/}
        {/*	<FontAwesomeIcon className={'text-white text-4xl'} icon={faFacebookSquare} />*/}
        {/*</a>*/}
        {/*<a href={'https://twitter.com/HarmonySkullCds'}>*/}
        {/*  <FontAwesomeIcon className={'text-white text-4xl'} icon={faTwitterSquare} />*/}
        {/*</a>*/}
        {/*<a href={'https://www.linkedin.com/in/harmonyskull/'}>*/}
        {/*  <FontAwesomeIcon className={'text-white text-4xl'} icon={faLinkedin} />*/}
        {/*</a>*/}
        {/*<a href={'https://github.com/HarmonySkull'}>*/}
        {/*  <FontAwesomeIcon className={'text-white text-4xl'} icon={faGithubSquare} />*/}
        {/*</a>*/}
      </nav>
    </main>
  )
}

export default Home
