import React from 'react'

const TodoContext = React.createContext({
  currentTodo: null,
  todos: [
    { id: 1, text: 'Cursus euismod quis viverra nibh cras.' },
    {
      id: 2,
      text: 'Egestas tellus rutrum tellus pellentesque eu tincidunt tortor.',
    },

    { id: 3, text: 'A scelerisque purus semper eget duis at tellus at.' },

    {
      id: 4,
      text: 'Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus.',
    },
    {
      id: 5,
      text: 'Eget est lorem ipsum dolor.',
    },
    {
      id: 6,
      text: 'In nibh mauris cursus mattis molestie a iaculis at erat.',
    },
  ],
})

export default TodoContext
