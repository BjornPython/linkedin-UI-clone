"use client"

import { useEffect, useState } from "react"
import Chat from "./Chat"
const getMessages = async (ENDPOINT) => {
    if (!ENDPOINT) { return [] }
    const res = await fetch(`${ENDPOINT}/users/chatsample`)
    const data = await res.json()
    console.log("DATA: ", data);
    return data
}

function Focused({ ENDPOINT }) {

    const [chats, setChats] = useState([])
    useEffect(() => {
        console.log("ENDPOINT: ", ENDPOINT);
        const callGetMessages = async () => {
            const data = await getMessages(ENDPOINT)
            setChats(data)
        }
        callGetMessages()
    }, [ENDPOINT])


    return (
        <div className='focused-container' >
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