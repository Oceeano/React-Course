import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./components/Profile/MyPosts/Post/Post";
import Dialog from "./components/Dialogs/Dialog/Dialog";
import Message from "./components/Dialogs/Message/Message";
import state from "./REDUX/state";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App state={state}/>
    </React.StrictMode>
)



/*
let dialogsElements = dialogs.map((d) => {
    return <Dialog name={d.name} id={d.id}/>
});
*/

/*
let messagesElements = messages.map(m => <Message id={m.id} message={m.message}/>);
*/

/*let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
