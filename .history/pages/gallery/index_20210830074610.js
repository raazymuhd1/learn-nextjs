import { lp1, lp2, wp1, wp2 } from "../../public"
import Image from "next/image"

import ScrollAnimation from "react-animate-on-scroll"

const Gallery = () => {
    return (
        <>
            <Image src={lp1} placeholder="blur"  />
            <Image src={lp2} placeholder="blur"  />
            <ScrollAnimation animateIn="bounce" animateOut="fadeOut" animateOnce={true} initiallyVisible={true} >
                    <Image src={wp1} placeholder="blur" width={300} height={300}  />
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInRight">
                <Image src={wp2} placeholder="blur" width={300} height={300}  />
            </ScrollAnimation>
        </>
    )
}

export default Gallery