import React, { useState, useContext, useRef, useEffect } from 'react'
import TodoContext from '../context/context'

export default function AddTodo() {
  const { state, dispatch } = useContext(TodoContext)
  const [value, setValue] = useState('')

  let ref = useRef()
  useEffect(() => {
    ref.current.focus()
  }, [])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim() === '') {
      alert('Cannot add empty note')
    } else {
      dispatch({ type: 'ADD_TODO', payload: value })
      setValue('')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input type="text" ref={ref} onChange={handleChange} value={value} />
        <button>Add Todo</button>
      </form>
    </div>
  )
}
