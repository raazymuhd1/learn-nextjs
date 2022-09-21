import React from 'react'
import Head from 'next/head'
import { Container } from '../global'

const Layout = ({ children }) => {
    return (
        <Container>
            <Head>
                <meta name="description" content="nextjs app" />
                <title> Big Next Project </title>
            </Head>
            
        </Container>
    )
}

export default Layout
