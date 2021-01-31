export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENT_TODO':
      return {
        ...state,
        currentTodo: action.payload,
      }
    default:
      return state
  }
}
