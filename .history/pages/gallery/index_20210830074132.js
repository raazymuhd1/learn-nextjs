import { lp1, lp2, wp1, wp2 } from "../../public"
import Image from "next/image"

import ScrollAnimation from "react-animate-on-scroll"

const Gallery = () => {
    return (
        <>
            <Image src={lp1} placeholder="blur"  />
            <Image src={lp2} placeholder="blur"  />
            <ScrollAnimation animateIn="bounce" animateOut="fadeOut" >
                    <Image src={wp1} placeholder="blur"  />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
                <Image src={wp2} placeholder="blur"  />
            </ScrollAnimation>
        </>
    )
}

export default Gallery