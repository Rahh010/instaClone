import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Decide.css";

const Decide = () => {
  return (
    <section className='decide-main'>
      <div className='decide-box'>
        <h2 className='instagram'>Instakart</h2>
        <h2 className='heading'>Choose your purpose</h2>
          <button>
              For Entertainment
              <p>You can see post, reels and buy products</p>
          </button>
          <button>
              For Business
              <p>You can see post, reels and sell products</p>
          </button>
      </div>
    </section>
  )
}

export default Decide