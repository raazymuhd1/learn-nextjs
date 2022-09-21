import React, { useEffect } from 'react'
import { Container } from '../../components/global'
import Todos from '../../components/todo'
import useProtectedRoute from "../../protect-route"

const Todo = () => {

    useEffect(() => useProtectedRoute(), [])

    return (
        <Container>
              <Todos />
        </Container>
    )
}

export default Todo
