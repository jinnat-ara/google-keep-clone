import React from 'react'
import './note.css'

const Note = ({background,title,content}) => {

 

  return (
    <div className='note' style={{backgroundColor:background}}>
        <h1>{title}</h1>
        <p>{content}</p>
    </div>
  )
}

export default Note