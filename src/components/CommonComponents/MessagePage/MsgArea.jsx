import React, { useEffect, useRef } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import SingleText from './SingleText';
import './MsgArea.css'
import { singleText } from './msg';
import { useNavigate } from 'react-router-dom';

const MsgArea = () => {
  
  const contentRef = useRef(null)
  useEffect(() => {
    contentRef.current.scrollIntoView()
  },[])

  const navigateTo = useNavigate()
  const handleBack = () => {
    navigateTo('/Buyer/messages')
  }

  return (
        <section className="msg-area-main">
            <header className='msg-area-head'>
                <button onClick={handleBack}>
                  <IoIosArrowBack size={40} />
                </button>
                <p>username</p>
            </header>
            <main className='msg-area'>
                {
                  singleText.map((e,i) => {
                    return <SingleText key={i} msg={e} />
                  })
                }
                <div ref={contentRef}></div>
            </main>
            <footer className='msg-area-footer'>
                <input type="text" />
                <button>send</button>
            </footer>
        </section>
  )
}

export default MsgArea