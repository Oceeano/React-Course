import React from "react";
import s from "./Friend.module.css"


const Friend = (props) => {
    return (<div className={s.friendWrapper}>
            {/*Friend*/}
            <img className={s.friendAva} src={props.ava}/>
          {/*  ({props.id})*/}
            {props.name}
        </div>
    )
}

export default Friend