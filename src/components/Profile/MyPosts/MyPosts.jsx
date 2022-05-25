import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    /*
        let posts = [
            {id: 1, message: "YOU'RE JUST A PIDORAS FROM A GULAG", likesCount: 88},
            {id: 2, message: "sto pischilos' brat?", likesCount: 14},
            {id: 3, message: "haraso...haraso...", likesCount: 1337},
            {id: 4, message: "Srazu hocu postel", likesCount: 666},
        ]
        let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    */

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.MyPosts_header}>
            <h3>My Showdowns:</h3>
            <div className={s.addPost}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    {postsElements}

                </div>
            </div>

        </div>
    )
}

export default MyPosts;

//https://source.unsplash.com/random