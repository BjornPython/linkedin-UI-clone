"use client"

import { useEffect, useState } from "react"
import Chat from "./Chat"
const getMessages = async () => {
    const res = await fetch("http://localhost:8000/users/chatsample")
    const data = await res.json()
    console.log("RES: ", data);
    return data
}

function Focused() {

    const [chats, setChats] = useState([])

    useEffect(() => {
        const callGetMessages = async () => {
            const data = await getMessages()
            setChats(data)
        }
        callGetMessages()
    }, [])


    return (
        <div className='focused-container'>
            {chats.map(chat => {
                return <Chat key={chat[0]} info={chat[1]} />
            })}
            {chats.map(chat => {
                return <Chat key={chat[0]} info={chat[1]} />
            })}
        </div>
    )
}

export default Focused