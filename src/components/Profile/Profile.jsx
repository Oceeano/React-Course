import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ ProfileInfo";

const Profile = () => {
    return <div>
        <div className={s.content_wall}>
            <img className={s.content__image} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbucket.mn2s.com%2Fwp-content%2Fuploads%2F2018%2F10%2F13144019%2Fsteven-seagal-mn2s.jpg&f=1&nofb=1"/>
        </div>
        <ProfileInfo/>
        <MyPosts/>
    </div>
        ;
}

export default Profile;

//https://source.unsplash.com/random