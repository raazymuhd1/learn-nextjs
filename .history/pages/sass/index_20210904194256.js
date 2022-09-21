import React from 'react'
import styles from "../../styles/sass.module.scss"
import Image from "next/image"
import { lp1, lp2} from "../../public"

const Sass = () => {
    return (
        <div>
             <Image src={lp1} width={400} height={400} placeholder="blur" />
        </div>
    )
}

export default Sass
