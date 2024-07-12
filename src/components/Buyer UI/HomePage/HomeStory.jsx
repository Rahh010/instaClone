import React from 'react'
import './HomeStory.css'
import { storyInfo } from './HomeConstant'
import { useState } from 'react'

const HomeStory = () => {

  const [currInd, setInd] = useState(0)
  let transformProperty
  const handleNext = () => {
    if (currInd < storyInfo.length - 7) { 
      setInd(() => currInd + 1)
      transformProperty = `-${currInd * 85}px`
    }
    console.log(transformProperty)
  }

  return (
    <div className='home-story-main'>
      <button>pre</button>
      <ul >
        {storyInfo.map((item, index) => (
          <li key={index} className='story-list' style={{transform: `translateX(${transformProperty})`}}>
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
