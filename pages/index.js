import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useSession } from "next-auth/client"

// Client-side rendering => rendering/fetching the content after the page loaded
// Server-side rendering => rendering/fetching the content on the page load
// Static-side Generation => rendering/fetching the content the content load

export default function Home() {
         const dude = "dude"
         const [ session, loading ] = useSession()
         const data = ["izdihaar", "jakarta"]

          
  return (
          <div className={styles.container}>
              <h2 className={styles.heading}> Welcome Home  </h2>
          </div>
  )
}
