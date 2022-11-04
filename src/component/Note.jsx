import React from 'react'
import './note.css'

const Note = (props) => {
  return (
    <div className='note'>
        <h1>props.title</h1>
        <p>props.content</p>
    </div>
  )
}

export default Note