import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.descriptionBlock}>
            <img className={s.content__img_ava}
                 src='https://64.media.tumblr.com/50704a7181f23927454dfb29a12810ce/tumblr_n1aqd2wJbp1qz5ytzo1_640.gifv'/>
            + description
        </div>
    )
}

export default ProfileInfo;
