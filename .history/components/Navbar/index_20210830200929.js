import { LI, Nav, UL, HeadingThree } from "./styles";
import Link from "next/link"
import { useSession } from "next-auth/client"

const Navbar = () => {
     const session = useSession()

    return (
        <Nav>
             <HeadingThree> Mohammed Raazy </HeadingThree>
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
                 { !session && 
                    <Link href="/api/auth/signin">
                        <LI> Sign In </LI>
                    </Link>
                  }
                  { session && !loading &&
                    <Link href="/api/auth/signout">
                        <LI> Sign Out </LI>
                    </Link>
                  }
             </UL>
        </Nav>
    )
}

export default Navbar;