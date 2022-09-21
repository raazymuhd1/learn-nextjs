import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useSession } from "next-auth/client"

export default function Home() {
         const dude = "dude"
         const [ session, loading ] = useSession()

  return (
          <div className={styles.container}>
              <h2 className={styles.heading}> Welcome Home { session.user.name } </h2>
          </div>
  )
}
