import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d) => {
        return <Dialog name={d.name} id={d.id} ava={d.ava}/>
    });

    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>);

    let addMessage = React.createRef()

    let renderMessage =()=> {
        let message = addMessage.current.value
        alert(message)
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.addMessage}>
                <textarea ref={addMessage}></textarea>
                <button onClick={renderMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;
