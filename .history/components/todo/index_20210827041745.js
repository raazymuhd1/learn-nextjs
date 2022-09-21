import React, { useState, useReducer } from 'react'
import { Container } from '../global'
import { Input } from './styles'

const Todos = () => {
    return (
        <Container>
             <Input type="text" placeholder="put something inside me" />

        </Container>
    )
}

export default Todos
