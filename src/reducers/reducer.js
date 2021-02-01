export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENT_TODO':
      console.log('action', action)
      return {
        ...state,
        currentTodo: action.payload.todo,
      }
    case 'DELETE_TODO':
      const deletedTodo = state.todos.filter(
        (x) => x.id !== action.payload.todoID
      )
      return {
        ...state,
        todos: deletedTodo,
      }
    case 'ADD_TODO':
      const newTodo = {
        id: uuid.v4(),
        text: action.payload,
      }
      const addedTodo: [...state.todo, newTodo]
      console.log('reducer.js state', state)
      return {
        ...state,
        todos: addedTodos
      }
    default:
      return state
  }
}
