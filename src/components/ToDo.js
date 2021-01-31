import React, { useContext, useReducer } from 'react'
import TodoContext from '../context/context'

function ToDo() {
  const initialState = useContext(TodoContext)
  return <h1>ToDo</h1>
}

export default ToDo
