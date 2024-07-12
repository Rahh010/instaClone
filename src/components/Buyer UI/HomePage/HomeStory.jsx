import React from 'react'
import './HomeStory.css'
import { storyInfo } from './HomeConstant'
import { useState } from 'react'

const HomeStory = () => {

  const [currInd, setInd] = useState(0)
  const handleNext = () => {
    if (currInd < storyInfo.length - 7) { 
      setInd(() => currInd + 1)
    }
    console.log(currInd)
    console.log(storyInfo.length - 6)

  }

  const handlePre = () => {
      setInd(() => currInd - 1)
  }

  return (
    <div className='home-story-main'>
      <button onClick={handlePre}>pre</button>
      <ul >
        {storyInfo.map((item, index) => (
          <li key={index} className='story-list' style={{transform: `translateX(${`-${currInd * 85}px`})`}}>
                <div>
                  <img src={item.profileSRC} alt="Profile Photo" />
                </div>
                <p>{ item.username}</p>
            </li>
        ))}
      </ul>
      <button onClick={handleNext}>next</button>
    </div>
  )
}

export default HomeStory