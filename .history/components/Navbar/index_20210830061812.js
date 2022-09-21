import { LI, Nav, UL } from "./styles";
import Link from "next/link"

const Navbar = () => {
    return (
        <Nav>
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