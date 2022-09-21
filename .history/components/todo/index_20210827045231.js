import { SettingsSystemDaydreamRounded } from '@material-ui/icons'
import React, { useState, useReducer } from 'react'
import { Container } from '../global'
import { Input, TodoButton } from './styles'

const reducer = (state, action) => {
      switch(action.type) {
           case "add":
               return [ ...state, { name: action.name, age: action.age } ]
            default:
                return state;
      }
}

const Todos = () => {
      const [ state, dispatch ] = useReducer(reducer, [] )
      const [ name, setName] = useState("")
      const [ age, setAge] = useState("")

      const AddTodo = () => {
          dispatch({ type: "add", name: name, age: age })

          setName("")
          setAge("")
      }
   
    return (
        <Container>
             <Input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="put something inside me" />
             <Input type="text" value={age} onChange={e => setAge(e.target.value)} placeholder="put something inside me" />
              <TodoButton onClick={AddTodo}> Add List </TodoButton>

              { state.map(todo => (
                  <>
                  <h2> { todo.name } </h2>
                  <h2> { todo.age } </h2>
                  </>
              )) }
        </Container>
    )
}

export default Todos
