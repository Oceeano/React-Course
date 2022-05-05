import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return <div className={s.content}>
    <div className={s.content_wall}>
      <img className={s.content__image} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F227096.jpg&f=1&nofb=1" />
    </div>
    <div>
      <img className={s.content__img_ava} src='https://64.media.tumblr.com/50704a7181f23927454dfb29a12810ce/tumblr_n1aqd2wJbp1qz5ytzo1_640.gifv' />
      + description
    </div>
    <MyPosts />
  </div>
    ;
}

export default Profile;

//https://source.unsplash.com/random