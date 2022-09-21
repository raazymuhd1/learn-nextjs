import React, { useState, useReducer } from 'react'
import { Container } from '../global'
import { Input, TodoButton } from './styles'

const Todos = () => {

    const [ addValue, setAddValue ] = useState("")
    const [ todo, setTodo ] = useState([])

    const displayedTodo = () => {
        setTodo( prevState => [ ...prevState, add ] )
    }

    return (
        <Container>
             <Input type="text" value={addValue} onChange={e => setAddValue(e.target.value)} placeholder="put something inside me" />
              <TodoButton onClick={displayedTodo}> Add List </TodoButton>
        </Container>
    )
}

export default Todos
