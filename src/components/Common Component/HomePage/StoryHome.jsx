import React from 'react';
import './StoryHome.css';

const StoryHome = ({ profile, username }) => {
  return (
    <div className="storyhome">
      <div className="story-profile">
        <img src={profile} alt={username} />
      </div>
      <div className="story-username">
        <span>{username}</span>
      </div>
      
    </div>
  );
};

export default StoryHome;
