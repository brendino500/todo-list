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
    default:
      return state
  }
}
