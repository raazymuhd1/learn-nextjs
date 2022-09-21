import React from 'react'
import { getSession, signIn } from "next-auth/client"

const useProtectedRoute = () => {
        const session = getSession();

        if(!session) {
            signIn()
        }
}

export default useProtectedRoute
