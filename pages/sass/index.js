import React from 'react'
import styles from "../../styles/sass.module.scss"
import Image from "next/image"
import { lp1, lp2} from "../../public"

const Sass = () => {
    return (
        <div className={styles.container}>
             <Image 
             className={styles.square} 
             src={lp1} width={400} 
             height={400} placeholder="blur" />
             <Image
              className={styles.circle}  
              src={lp2} width={400} 
              height={400} placeholder="blur" />

             {/* lightMode btn */}
             <button className={styles.light}> Light </button>
             <button className={styles.dark}> Dark </button>
        </div>
    )
}

export default Sass
