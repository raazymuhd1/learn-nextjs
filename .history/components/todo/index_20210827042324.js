import React, { useState, useReducer } from 'react'
import { Container } from '../global'
import { Input, TodoButton } from './styles'

const Todos = () => {
    return (
        <Container>
             <Input type="text" placeholder="put something inside me" />
              <TodoButton> Add List </TodoButton>
        </Container>
    )
}

export default Todos
