import React from 'react';
import './ProfileMain.css'; // Import a CSS file for styling if needed

const ProfileMain = () => {
  return (
    <div className="profile-main">
      <img
        src="/proffesinalai.jpg" // Update with the actual image path
        alt="Profile"
        className="profile-photo"
      />
      <h2 className="username">Username</h2>
      <div className="follower-following">
        <span className="followers">Followers: 00</span>
        <span className="following">Following: 00</span>
      </div>
      <div className="posts">Posts: 0</div>
    </div>
  );
};

export default ProfileMain;
