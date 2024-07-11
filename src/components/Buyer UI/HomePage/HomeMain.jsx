import React from 'react'
import './HomeMain.css'
import HomeStory from './HomeStory'
import HomePost from './HomePost'

const HomeMain = () => {
  return (
      <div className='home-main'>
          <div>
            <HomeStory />
          </div>
          <div className='post-area'>
            <HomePost />
            <HomePost />
            <HomePost />
            <HomePost />
            <HomePost />
            <HomePost />
            <HomePost />
          </div>
    </div>
  )
}

export default HomeMain