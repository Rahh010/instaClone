import React, { useState } from 'react';
import './MsgSingle.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import MsgArea from './MsgArea';

const MsgSingle = (props) => {
  const [ msgName, setMsgname ] = useState("")
  const { id, src, name } = props.data
  const navigateTo = useNavigate()
  const handleChats = (e) => {
      navigateTo('dm')
  }
  return (
  <>
      <div className='msg-single-main' id={id} onClick={handleChats}>
          <img src={src} id='msg-single-profile' />
          <p id='msg-single-username'>{ name }</p>
      </div>
  </>
  )
}

export default MsgSingle
