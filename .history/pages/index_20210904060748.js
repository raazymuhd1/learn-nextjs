import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useSession } from "next-auth/client"

export default function Home() {
         const dude = "dude"
         const [ session, loading ] = useSession()
         const data = ["izdihaar", "jakarta"]

         const tampilkanNama = (nama) => {
              const person = ['name', "mohammed"]

              nama(person)
         }

         tampilkanNama(p => {
           p.map(peep => console.log(peep[0]) ) 
         })
         
         const close = (() => {
            let counter = 0;

              return function() {
                 return counter++
              }
          })()          
           console.log(close()) 
           console.log(close()) 
           console.log(close()) 
 
          
  return (
          <div className={styles.container}>
              <h2 className={styles.heading}> Welcome Home  </h2>
          </div>
  )
}
