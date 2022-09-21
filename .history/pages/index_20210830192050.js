import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
         const dude = "dude"

  return (
          <div className={styles.container}>
              <h2 className={styles.heading}> Welcome Home { dude.italics() } </h2>
          </div>
  )
}
