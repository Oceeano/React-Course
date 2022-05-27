import React from "react";
import Friend from "./Friend/Friend";
import s from "./Friends.module.css"

const Friends = (props) => {
    return <div className={s.friendsBar}>
        {props.state.map(f => <Friend ava={f.ava} id={f.id} name={f.name}/>
        )}
        {/*{friend}*/}
    </div>
}

export default Friends

/*
<Friend id={props.state.id} name={props.state.name}/>*/

/* let friend = */