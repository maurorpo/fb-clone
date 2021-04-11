import React from 'react';
import StoryReel from '../StoryReel'
import Post from '../Post'
import MessageSender from '../MessageSender'
import './Feed.css'

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
