import React, { useEffect } from 'react'
import { Container } from '../../components/global'
import Todos from '../../components/todo'
import ProtectedRoute from "../../protect-route"

const Todo = () => {

    useEffect(() => ProtectedRoute(), [])

    return (
        <Container>
              <Todos />
        </Container>
    )
}

export default Todo
