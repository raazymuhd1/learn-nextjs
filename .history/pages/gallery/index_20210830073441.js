import { lp1, lp2 } from "../../public"
import Image from "next/image"

const Gallery = () => {
    return (
        <>
            <Image src={lp1} placeholder="blur"  />
            <Image src={lp2} placeholder="blur"  />
        </>
    )
}

export default Gallery