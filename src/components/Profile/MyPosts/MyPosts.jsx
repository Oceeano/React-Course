import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef()

    let addPost =()=> {
    let text = newPostElement.current.value;
        alert(text)
    }



    return (
        <div className={s.MyPosts_header}>
            <h3>My Showdowns:</h3>
            <div className={s.addPost}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
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