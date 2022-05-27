import React from "react";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "YOU'RE JUST A PIDORAS FROM A GULAG", likesCount: 88},
            {id: 2, message: "sto pischilos' brat?", likesCount: 14},
            {id: 3, message: "haraso...haraso...", likesCount: 1337},
            {id: 4, message: "Srazu hocu postel", likesCount: 666}
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Sosa', ava: "https://i.ytimg.com/vi/YWyHZNBz6FE/maxresdefault.jpg"},
            {
                id: 2,
                name: 'Bosa',
                ava: "https://sportshub.cbsistatic.com/i/r/2022/04/25/cbcaa2a8-edd1-46ee-b360-ae7b049ad7a2/thumbnail/770x433/7c5da8def6ccd8e35e7d1f31313f3d90/nick-bosa.jpg"
            }
        ],
        messages: [
            {id: 1, message: "zdrasu"},
            {id: 2, message: "sto pischilos'"},
            {id: 3, message: "GET UP SUKA!"}
        ],
    },

        friendsPage: {
            friends: [
                {id: 1, name: 'Sosa', ava: "https://i.ytimg.com/vi/YWyHZNBz6FE/maxresdefault.jpg"},
                {
                    id: 2,
                    name: 'Bosa',
                    ava: "https://sportshub.cbsistatic.com/i/r/2022/04/25/cbcaa2a8-edd1-46ee-b360-ae7b049ad7a2/thumbnail/770x433/7c5da8def6ccd8e35e7d1f31313f3d90/nick-bosa.jpg"
                },
                {id: 3, name: 'Billy', ava: "https://pbs.twimg.com/profile_images/1124085945530298370/x9EsUs56_400x400.png"}
            ],
        },

}

export default state