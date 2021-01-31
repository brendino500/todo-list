export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENT_TODO':
      return {
        ...state,
        currentTodo: action.payload,
      }
    case 'DELETE_TODO':
      const deletedTodo = state.todos.filter((x) => x.id !== action.payload)
      return {
        ...state,
        todos: deletedTodo,
      }
    default:
      return state
  }
}
