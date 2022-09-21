import { LI, Nav, UL, HeadingOne } from "./styles";
import Link from "next/link"

const Navbar = () => {
    return (
        <Nav>
             <HeadingOne> Mohammed Raazy </HeadingOne>
             <UL>
                 <Link href="/comment">
                     <LI> Comments </LI>
                 </Link>
                 <Link href="/movies">
                     <LI> Movies </LI>
                 </Link>
                 <Link href="/posts">
                     <LI> Posts </LI>
                 </Link>
                 <Link href="/todo">
                     <LI> Todos </LI>
                 </Link>
             </UL>
        </Nav>
    )
}

export default Navbar;