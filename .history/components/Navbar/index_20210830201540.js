import { LI, Nav, UL, HeadingThree } from "./styles";
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/client"

const Navbar = () => {
     const [session, loading] = useSession()

     console.log(session)

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
                        <LI onClick={() => signIn()}> Sign In </LI>
                  }
                  { session && !loading &&
                        <LI onClick={() => signOut() } > Sign Out </LI>
                  }
             </UL>
        </Nav>
    )
}

export default Navbar;