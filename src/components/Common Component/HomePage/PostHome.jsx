import React from 'react';
import './PostHome.css'; // You'll add styling in this file

const PostHome = ({ posts }) => {
  return (
    <div className="post-section">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <img src={post.userProfile} alt={post.username} className="post-profile-img" />
            <span className="post-username">{post.username}</span>
          </div>
          <div className="post-image">
            <img src={post.imageUrl} alt={post.caption} />
          </div>
          <div className="post-caption">
            <strong>{post.username}</strong> {post.caption}
          </div>
          <div className="post-footer">
            <span className="post-likes">{post.likes} likes</span>
            <span className="post-comments">{post.comments.length} comments</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostHome;
