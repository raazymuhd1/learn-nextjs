import React, { useEffect } from 'react'
import Head from 'next/head'
import { Container, Main } from '../global'
import Navbar from '../Navbar'

const Layout = ({ children }) => {

    return (
        <Container>
            <Navbar />
            <Head>
                <meta name="description" content="nextjs app" />
                <title> Big Next Project </title>
            </Head>

            <Main>
                { children }
            </Main>
        </Container>
    )
}

export default Layout
