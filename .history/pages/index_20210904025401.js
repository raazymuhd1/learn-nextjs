import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useSession } from "next-auth/client"

export default function Home() {
         const dude = "dude"
         const [ session, loading ] = useSession()

         console.log(session)
         
         const close = (() => {
            let counter = 0;

              return function() {
                 console.log(counter++)
                 console.log(counter++)
                 console.log(counter++)
              }
          })          
           close()()

  return (
          <div className={styles.container}>
              <h2 className={styles.heading}> Welcome Home  </h2>
          </div>
  )
}
