import React from 'react'
import './HomePost.css'
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegHeart, FaRegComment, FaRegBookmark  } from "react-icons/fa6";
import { PiPaperPlaneTiltBold } from "react-icons/pi";

const HomePost = () => {
  return (
    <div className='home-post-main'>
      <div className='post-head'>
        <div id='user-head-details'>
          <img src="proffesinalai.jpg" alt="" id='profile-pic-post'/>
          <p id='post-username'>username</p>
          <p id='post-time'>&#x2022;</p>
          <p id='post-time'>1 d</p>
        </div>
        <div id="post-head-threedots">
          <HiDotsHorizontal size={20} />
        </div>  
      </div>

      <div>
        <img src="proffesinalai.jpg" alt="" id='post-img' />
      </div>
      <div id='post-icons'>
        <div id='main-icons'>
          <FaRegHeart size={25} id='post-icons' style={{'paddingLeft': '0px'}} />
          <FaRegComment size={25} id='post-icons' className='comment' />
          <PiPaperPlaneTiltBold size={25} id='post-icons'/>
        </div>
        <div id='save-icon'>
          <FaRegBookmark size={25}  />
        </div>
      </div>

      <div id='post-username'>5 likes</div>

      <div className='post-footer'>
        <p id='post-comment'>
          <b id='comment-username'>username</b>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia maxime a unde in quos alias excepturi ipsum temporibus eius consequatur.
        </p>
      </div>

      <div id='post-comment' className='view-comments'>
        View all comments
      </div>

      <div>
        <input type="text" name='comment' placeholder='Add a comment...' id='comment-input' />
        <button type="button" id='comment-btn'>Post</button>
      </div>
    </div>
  )
}

export default HomePost
