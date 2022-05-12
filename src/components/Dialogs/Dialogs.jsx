import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs\1">Shosh</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs\2">Bosa</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs\3">Beat</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    sheesh
                </div>
                <div className={s.message}>
                    ARE YOU ALONE?!
                </div>
                <div className={s.message}>
                    REMEMBER: NO RUSSIAN
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
