import React, { useContext, useReducer } from 'react'
import TodoContext from './context/context'
import todoReducer from './reducers/reducer'

function App() {
  const initialState = useContext(TodoContext)
  const [state, dispatch] = useReducer(todoReducer, initialState)
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div>
        <h1>Todo</h1>
      </div>
    </TodoContext.Provider>
  )
}

export default App
