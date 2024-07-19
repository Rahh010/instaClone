import React from 'react'
import { useState } from 'react';
import './HomePost.css'
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegHeart, FaRegComment, FaRegBookmark  } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { PiPaperPlaneTiltBold } from "react-icons/pi";

const HomePost = () => {
  const [ like, setLike ] = useState(false)
  const [ likeCount, setLikeCount ] = useState(0)
  const handleLike = () => {
    setLike(() => !like)
    like ? setLikeCount(() => likeCount - 1 ) : setLikeCount(() => likeCount + 1 )
  }

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
          {
            like ? 
            <FaHeart size={25} color='#ff0000' id='post-icons' style={{'paddingLeft': '0px'}} onClick={handleLike} />
            :
            <FaRegHeart size={25} id='post-icons' style={{'paddingLeft': '0px'}} onClick={handleLike} />
          }
          <FaRegComment size={25} id='post-icons' className='comment' />
          <PiPaperPlaneTiltBold size={25} id='post-icons'/>

        </div>
        <div id='save-icon'>
          <FaRegBookmark size={25}  />
        </div>
      </div>

      <div id='post-username'>{likeCount} likes</div>

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
