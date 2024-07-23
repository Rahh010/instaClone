import React from 'react'
import './SingleText.css'

const SingleText = (props) => {
  const { msg, type } = props.msg
  return (
    <div className='text-items'>
      <p className='text' id={type}>{msg}</p>
    </div>
  )
}

export default SingleText
