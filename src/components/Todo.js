import React, { useContext } from 'react'
import TodoContext from '../context/context'

export default function Todo({ todo }) {
  const { dispatch } = useContext(TodoContext)

  return (
    <div>
      <p>{todo.text}</p>
      <div>
        <button
          onClick={() => dispatch({ type: 'SET_CURRENT_TODO', payload: todo })}
        >
          Edit
        </button>
        <button
          onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
