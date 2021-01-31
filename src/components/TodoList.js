import React, { useContext } from 'react'
import TodoContext from '../context/context'

export default function TodoList() {
  const { state } = useContext(TodoContext)
  return <h1>Todo List</h1>
}
