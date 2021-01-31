import React, { useContext } from 'react'
import TodoContext from '../context/context'
import Todo from '../components/Todo'

export default function TodoList() {
  const { state } = useContext(TodoContext)

  return (
    <div>
      {state.todos.map((todo, i) => {
        return <Todo todo={todo} key={i} />
      })}
    </div>
  )
}
