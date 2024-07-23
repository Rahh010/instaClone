import React from 'react';

import './MsgSingle.css'

const MsgSingle = (props) => {
  const { src, name } = props.data
  return (
    <div className='msg-single-main'>
        <img src={src} id='msg-single-profile' />
        <p id='msg-single-username'>{ name }</p>
    </div>
  )
}

export default MsgSingle
