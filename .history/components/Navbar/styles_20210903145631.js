import styled from "styled-components"

export const Nav = styled.nav`
    padding: 5px 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background:${({theme}) => theme.colors.bg } ;
    color: #fff;
    border-radius: 8px;
    letter-spacing: 0.1rem;

    @media ${({theme}) => theme.breakpoints.sm } {
         flex-direction: column;
         justify-content: center;
    }

`

export const HeadingThree = styled.h3`
    letter-spacing: 0.1rem;
`

export const UL = styled.div`
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   justify-items: center;
   ${'' /* gap: 10px; */}
   cursor: pointer;

${'' /* small size */}
   @media ${({theme}) => theme.breakpoints.sm } {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       justify-items: center;
   }

   ${'' /* medium size */}
   @media ${({theme}) => theme.breakpoints.md} {
       margin-left: 1rem;
       grid-template-columns: repeat(3, 1fr);
   }
`

export const LI = styled.li`
    list-style: none;
`