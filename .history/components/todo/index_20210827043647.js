import React, { useState, useReducer } from 'react'
import { Container } from '../global'
import { Input, TodoButton } from './styles'

const Todos = () => {

   
    return (
        <Container>
             <Input type="text" value={addValue} onChange={e => setAddValue(e.target.value)} placeholder="put something inside me" />
              <TodoButton > Add List </TodoButton>

              { todos.map(todo => (
                  <h2> { todo } </h2>
              )) }
        </Container>
    )
}

export default Todos
