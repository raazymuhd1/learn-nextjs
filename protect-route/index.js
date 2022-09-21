import React from 'react'
import { getSession, signIn } from "next-auth/client"

const ProtectedRoute = async() => {
        const session = await getSession();

        console.log(session)

        if(!session) {
            signIn()
        }
}

export default ProtectedRoute
