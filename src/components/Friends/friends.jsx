import React from "react";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    return <div className="friendsBar">
        <Friend id={props.state.id} name={props.state.name}/>
    </div>
        }

export default Friends