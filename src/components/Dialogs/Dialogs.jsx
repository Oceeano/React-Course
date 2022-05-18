import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Sosa'},
        {id: 2, name: 'Bosa'}
        ]


    let messagesData = [
        {id: 1, message: "zdrasu"},
        {id: 2, message: "sto pischilos'"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>

            </div>
        </div>
    )
}

export default Dialogs;
