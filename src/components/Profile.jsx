import React from 'react';
import cls from './Profile.module.css';

const Profile = () => {
  return <div className={cls.content}>
    <img className='content__image' src="https://64.media.tumblr.com/a583d759795c9dffed6d119d0c8fd363/tumblr_n0vkk4Chc61qz5ytzo1_1280.pnj" />

    <div>
      <img className='content__img-ava' src='https://64.media.tumblr.com/50704a7181f23927454dfb29a12810ce/tumblr_n1aqd2wJbp1qz5ytzo1_640.gifv' />
      + description
    </div>
    <div>
      My posts

      <div>
        New post
      </div>
      <div className={cls.posts}>
        <div className={cls.item}>
          Post 1
        </div>
        <div className={cls.item}>
          Post 2
        </div>
      </div>
    </div>
  </div>
    ;
}

export default Profile;