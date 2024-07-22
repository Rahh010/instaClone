import React from 'react';
import img from '../assests/proffesinalai.jpg'
import './MsgSingle.css'

const MsgSingle = () => {
  return (
    <div className='msg-single-main'>
        <img src={img} id='msg-single-profile' />
        <p id='msg-single-username'>UserName</p>
    </div>
  )
}

export default MsgSingle
