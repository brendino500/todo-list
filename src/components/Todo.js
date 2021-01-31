import React from 'react'

export default function Todo({ text }) {
  return (
    <div>
      <p>{text.text}</p>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}
