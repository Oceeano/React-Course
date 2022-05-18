import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    {id: 1, message: "YOU'RE JUST A PIDORAS FROM A GULAG", likesCount: 88},
    {id: 2, message: "sto pischilos' brat?", likesCount: 14},
    {id: 3, message: "haraso...haraso...", likesCount: 1337},
    {id: 4, message: "Srazu hocu postel", likesCount: 666},
  ]

  return (
      <div className={s.MyPosts_header}>
        <h3>My Showdowns:</h3>
        <div className={s.addPost}>
          <textarea></textarea>
          <button>Add post</button>
        </div>
    <div className={s.posts}>
      <div className={s.item}>
        <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
        <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
        <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
        <Post message={postData[3].message} likesCount={postData[3].likesCount}/>
      </div>
      </div>

      </div>
  )
}

export default MyPosts;

//https://source.unsplash.com/random