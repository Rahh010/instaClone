import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Decide.css";

const Decide = () => {
  const UInavigation = useNavigate();

  const BuyerUI = () => {
    UInavigation("/buyerUI");
  }

  const SellerUI = () => {
    UInavigation("/sellerUI");
  }
  return (
    <section className='decide-main'>
      <div className='decide-box'>
        <h2 className='instagram'>Instakart</h2>
        <h2 className='heading'>Choose your purpose</h2>
          <button onClick={BuyerUI}>
              For Entertainment
              <p>You can see post, reels and buy products</p>
          </button>
          <button onClick={SellerUI}>
              For Business
              <p>You can see post, reels and sell products</p>
          </button>
      </div>
    </section>
  )
}

export default Decide