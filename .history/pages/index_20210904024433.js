import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useSession } from "next-auth/client"

export default function Home() {
         const dude = "dude"
         const [ session, loading ] = useSession()

         console.log(session)

         let name = 'mohammed'
         const closure = () => {

             return function() {
                 console.log(name)
             }
         }

         let name = "izdihaar"

         const getName = closure()

         console.log(getName())

  return (
          <div className={styles.container}>
              <h2 className={styles.heading}> Welcome Home  </h2>
          </div>
  )
}
