import { ThemeProvider } from "styled-components"

import theme from "./defualtThemes"

const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
             { children }
        </ThemeProvider>
    )
}