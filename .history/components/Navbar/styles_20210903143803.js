import styled from "styled-components"

export const Nav = styled.nav`
    padding: 5px 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #333;
    color: #fff;
    border-radius: 8px;
    letter-spacing: 0.1rem;

    @media ${({theme}) => theme.breakpoints.sm } {
        
    }
`

export const HeadingThree = styled.h3`
    letter-spacing: 0.1rem;
`

export const UL = styled.div`
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   gap: 10px;
   cursor: pointer;
`

export const LI = styled.li`
    list-style: none;
`