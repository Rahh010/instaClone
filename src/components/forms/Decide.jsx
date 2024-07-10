import React from 'react';
import ReactDOM from 'react-dom/client';
// import BuyerUI from "../Buyer UI/BuyerUI";
// import SellerUI from "../Seller UI/SellerUI";
import "./Decide.css";

const Decide = () => {
  // let buyerUI = () => {
  //   ReactDOM.createRoot(document.getElementById("root")).render(
  //     <BuyerUI/>
  //   )
  // }

  // let sellerUI = () => {
  //   ReactDOM.createRoot(document.getElementById("root")).render(
  //     <SellerUI/>
  //   )
  // }
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