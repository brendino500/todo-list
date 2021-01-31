import React, { useContext, useReducer } from 'react'
import TodoContext from './context/context'
import todoReducer from './reducers/reducer'
import Nav from './components/Nav'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const initialState = useContext(TodoContext)
  const [state, dispatch] = useReducer(todoReducer, initialState)
  console.log('current state:', state)
  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div>
        <Nav />
        <AddTodo />
        <TodoList />
      </div>
    </TodoContext.Provider>
  )
}

export default App
