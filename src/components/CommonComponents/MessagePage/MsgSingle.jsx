import React from 'react';

import './MsgSingle.css'

const MsgSingle = (props) => {
  return (
    <div className='msg-single-main'>
        <img src={props.data} id='msg-single-profile' />
        <p id='msg-single-username'>UserName</p>
    </div>
  )
}

export default MsgSingle
