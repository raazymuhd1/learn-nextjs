import React, { useState, useReducer } from 'react'
import { Container } from '../global'
import { Input, TodoButton } from './styles'

const Todos = () => {

    const [ add, setAdd ] = useState("")

    console.log(add)

    return (
        <Container>
             <Input type="text" value={add} onChange={e => setAdd(e.target.value)} placeholder="put something inside me" />
              <TodoButton> Add List </TodoButton>
        </Container>
    )
}

export default Todos
