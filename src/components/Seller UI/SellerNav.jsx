import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { FaSearch, FaInstagram, FaFacebookMessenger, FaRegHeart,FaChartLine } from "react-icons/fa";

import "./SellerNav.css";

const SellerNav = () => {
  return (
    <section className='sellernav-main'>
      <h2>Instakart</h2>
      <section className='sellernav-list'>
        <ul className='seller-ul'>
          <li className='sellernav-list-items'>
            <GoHomeFill size={25} />
            <p>Home</p>
          </li>
          <li className='sellernav-list-items'>
            <FaSearch size={25}/>
            <p>Search</p> 
          </li>
          <li className='sellernav-list-items'>
            <FaInstagram size={25}/>
            <p>Reels</p> 
          </li>
          <li className='sellernav-list-items'>
            <FaFacebookMessenger size={25}/>
            <p>Message</p> 
          </li>
          <li className='sellernav-list-items'>
            <FaRegHeart size={25}/>
            <p>Notification</p> 
          </li>
          <li className='sellernav-list-items'>
            <FaChartLine size={25}/>
            <p>Sales</p> 
          </li>
          <li className='sellernav-list-items'>
            <img src="public/proffesinalai.jpg" alt="" className='sellernav-profile'/>
            <p>Profile</p> 
          </li>
        </ul>
      </section>
    </section>
  )
}

export default SellerNav;