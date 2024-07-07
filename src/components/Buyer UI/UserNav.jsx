import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { FaSearch, FaInstagram, FaFacebookMessenger, FaRegHeart } from "react-icons/fa";

import "./UserNav.css"  

const UserNav = () => {
  return (
    <section className='usernav-main'>
      <h2>Instakart</h2>
      <section className='usernav-list'>
        <ul className='user-ul'>
          <li className='usernav-list-items'>
            <GoHomeFill />
            Home
          </li>
          <li className='usernav-list-items'>
            <FaSearch />
            Search
          </li>
          <li className='usernav-list-items'>
            <FaInstagram />
            Reels
          </li>
          <li className='usernav-list-items'>
            <FaFacebookMessenger />
            Message
          </li>
          <li className='usernav-list-items'>
            <FaRegHeart />
            Notification
          </li>
          <li className='usernav-list-items'>
            <img src="public/proffesinalai.jpg" alt="" className='usernav-profile'/>
            Profile
          </li>
        </ul>
      </section>
    </section>
  )
}

export default UserNav