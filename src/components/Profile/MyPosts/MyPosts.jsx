import React from 'react';
import s from './Post/Post.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div className='MyPosts_header'>My Showdowns: 
    <div className={s.posts}>
      <div className={s.item}>
        <Post message="YOU'RE JUST A PIDORAS FROM A GULAG" likesCount=" 88"/>
        <Post message="sto pischilos' brat?"/>
        <Post message="haraso...haraso..."/>
        <Post message="Srazu hocu postel"/>
      </div>
      </div>
      </div>
}

export default MyPosts;

//https://source.unsplash.com/random