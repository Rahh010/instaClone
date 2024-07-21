import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { FaSearch, FaInstagram, FaFacebookMessenger, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import "./UserNav.css";

const UserNav = () => {
  const pageNavgation = useNavigate();
  const messages = () => {
    pageNavgation("/Buyer/messages");
  }
  const home = () => {
    pageNavgation("/Buyer");
  }
  return (
    <section className='usernav-main'>
      <h2>Instakart</h2>
      <section className='usernav-list'>
        <ul className='user-ul'>
          <li className='usernav-list-items' onClick={home}>
            <GoHomeFill size={25} />
            <p>Home</p>
          </li>
          <li className='usernav-list-items'>
            <FaSearch size={25}/>
            <p>Search</p> 
          </li>
          <li className='usernav-list-items'>
            <FaInstagram size={25}/>
            <p>Reels</p> 
          </li>
          <li className='usernav-list-items' onClick={messages}>
            <FaFacebookMessenger size={25}/>
            <p >Message</p> 
          </li>
          <li className='usernav-list-items'>
            <FaRegHeart size={25}/>
            <p>Notification</p> 
          </li>
          <li className='usernav-list-items'>
            <FaShoppingCart size={25}/>
            <p>Purchase</p> 
          </li>
          <li className='usernav-list-items'>
            <img src="proffesinalai.jpg" alt="" className='usernav-profile'/>
            <p>Profile</p> 
          </li>
        </ul>
      </section>
    </section>
  )
}

export default UserNav