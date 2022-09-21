import styled, { css } from 'styled-components'

export const Input = styled.input`
   padding: 4px 1rem;
   font-weight: 500;
   margin-right: 1rem;

    &:focus {
        border: none;
    }

`

export const TodoButton = styled.button`
   padding: 4px .5rem;
   font-weight: 500;
   letter-spacing: 0.1rem;
   background-color: orange;
   border: none;
   cursor: pointer;
`