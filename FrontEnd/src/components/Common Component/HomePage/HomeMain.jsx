import React, { useRef } from 'react';
import './HomeMain.css';
import PostHome from './PostHome';
import StoryHome from './StoryHome';

const HomeMain = () => {
  const storySectionRef = useRef(null);

  const storyConstant = [
    { id: 1, storyProfile: 'proffesinalai.jpg', storyUsername: 'User1' },
    { id: 2, storyProfile: 'proffesinalai.jpg', storyUsername: 'User2' },
    { id: 3, storyProfile: 'proffesinalai.jpg', storyUsername: 'User3' },
    { id: 4, storyProfile: 'proffesinalai.jpg', storyUsername: 'User4' },
    { id: 5, storyProfile: 'proffesinalai.jpg', storyUsername: 'User5' },
    { id: 6, storyProfile: 'proffesinalai.jpg', storyUsername: 'User6' },
    { id: 7, storyProfile: 'proffesinalai.jpg', storyUsername: 'User7' },
    { id: 8, storyProfile: 'proffesinalai.jpg', storyUsername: 'User8' },
    { id: 9, storyProfile: 'proffesinalai.jpg', storyUsername: 'User9' },
    { id: 10, storyProfile: 'proffesinalai.jpg', storyUsername: 'User10' },
    { id: 11, storyProfile: 'proffesinalai.jpg', storyUsername: 'User11' },
  ];

  const scrollLeft = () => {
    storySectionRef.current.scrollBy({
      left: -300, // Adjust this value based on how far you want to scroll
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    storySectionRef.current.scrollBy({
      left: 300, // Adjust this value based on how far you want to scroll
      behavior: 'smooth',
    });
  };

  const postConstant = [
    {
      id: 1,
      username: 'User1',
      userProfile: 'proffesinalai.jpg',
      imageUrl: 'proffesinalai.jpg',
      caption: 'This is an amazing post!',
      likes: 120,
      comments: ['Nice post!', 'Loved it!'],
    },
    {
      id: 2,
      username: 'User2',
      userProfile: 'proffesinalai.jpg',
      imageUrl: 'proffesinalai.jpg',
      caption: 'Having fun at the beach!',
      likes: 80,
      comments: ['Wow!', 'Awesome!'],
    },
    {
      id: 3,
      username: 'User2',
      userProfile: 'proffesinalai.jpg',
      imageUrl: 'proffesinalai.jpg',
      caption: 'Having fun at the beach!',
      likes: 80,
      comments: ['Wow!', 'Awesome!'],
    },
    {
      id: 4,
      username: 'User2',
      userProfile: 'proffesinalai.jpg',
      imageUrl: 'proffesinalai.jpg',
      caption: 'Having fun at the beach!',
      likes: 80,
      comments: ['Wow!', 'Awesome!'],
    },
    {
      id: 5,
      username: 'User2',
      userProfile: 'proffesinalai.jpg',
      imageUrl: 'proffesinalai.jpg',
      caption: 'Having fun at the beach!',
      likes: 80,
      comments: ['Wow!', 'Awesome!'],
    },
    {
      id: 7,
      username: 'User2',
      userProfile: 'proffesinalai.jpg',
      imageUrl: 'proffesinalai.jpg',
      caption: 'Having fun at the beach!',
      likes: 80,
      comments: ['Wow!', 'Awesome!'],
    },
    {
      id: 8,
      username: 'User2',
      userProfile: 'proffesinalai.jpg',
      imageUrl: 'proffesinalai.jpg',
      caption: 'Having fun at the beach!',
      likes: 80,
      comments: ['Wow!', 'Awesome!'],
    },
    {
      id: 9,
      username: 'User2',
      userProfile: 'proffesinalai.jpg',
      imageUrl: 'proffesinalai.jpg',
      caption: 'Having fun at the beach!',
      likes: 80,
      comments: ['Wow!', 'Awesome!'],
    },
    {
      id: 10,
      username: 'User2',
      userProfile: 'proffesinalai.jpg',
      imageUrl: 'proffesinalai.jpg',
      caption: 'Having fun at the beach!',
      likes: 80,
      comments: ['Wow!', 'Awesome!'],
    },
    {
      id: 11,
      username: 'User2',
      userProfile: 'proffesinalai.jpg',
      imageUrl: 'proffesinalai.jpg',
      caption: 'Having fun at the beach!',
      likes: 80,
      comments: ['Wow!', 'Awesome!'],
    },
    {
      id: 12,
      username: 'User2',
      userProfile: 'proffesinalai.jpg',
      imageUrl: 'proffesinalai.jpg',
      caption: 'Having fun at the beach!',
      likes: 80,
      comments: ['Wow!', 'Awesome!'],
    },
    {
      id: 13,
      username: 'User2',
      userProfile: 'proffesinalai.jpg',
      imageUrl: 'proffesinalai.jpg',
      caption: 'Having fun at the beach!',
      likes: 80,
      comments: ['Wow!', 'Awesome!'],
    },
    {
      id: 14,
      username: 'User2',
      userProfile: 'proffesinalai.jpg',
      imageUrl: 'proffesinalai.jpg',
      caption: 'Having fun at the beach!',
      likes: 80,
      comments: ['Wow!', 'Awesome!'],
    },
    {
      id: 15,
      username: 'User2',
      userProfile: 'proffesinalai.jpg',
      imageUrl: 'proffesinalai.jpg',
      caption: 'Having fun at the beach!',
      likes: 80,
      comments: ['Wow!', 'Awesome!'],
    },
    // Add more posts here...
  ];

  return (
    <div className="home-main">
      <section className="story-wrapper">
        <button className="scroll-button left" onClick={scrollLeft}>
          &#8249;
        </button>
        <div className="story-section" ref={storySectionRef}>
          {storyConstant.map((story) => (
            <StoryHome
              key={story.id}
              profile={story.storyProfile}
              username={story.storyUsername}
            />
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          &#8250;
        </button>
      </section>
      <section className="post-section">
        <PostHome posts={postConstant} />
      </section>
    </div>
  );
};

export default HomeMain;
