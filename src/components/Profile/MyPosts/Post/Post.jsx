import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (

    <div className={s.item}>
    <img className={s.item_ava} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftownsquare.media%2Fsite%2F341%2Ffiles%2F2011%2F10%2Fsteven-seagal.jpg%3Fw%3D1200%26h%3D0%26zc%3D1%26s%3D0%26a%3Dt%26q%3D89&f=1&nofb=1'></img>
    
    {props.message} 
    <br />
    <img className={s.item_likeImage} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-Eu8UrGUJk30%2FVtz12biVykI%2FAAAAAAAALpw%2FF6fLIVaKwe0%2Fs1600%2Flike.png&f=1&nofb=1'></img>
   <span>Likes:</span>
        {/*Likes counter*/}{props.likesCount}
    </div>
)

}

export default Post;

//https://source.unsplash.com/random
