"use client"

import { useState } from "react"
import "./messageTab.css"
import MessageHeader from "./MessageHeader"
import MessageSearch from "./MessageSearch"
import MessageContents from "./MessageContents"


function MessageTab({ ENDPOINT }) {
    const [expand, setExpand] = useState(false)


    const changeExpand = (val) => {
        setExpand(val)
    }

    return (
        <div className={`message-tab ${expand && "show-message-tab"}`} >
            <MessageHeader expand={expand} changeExpand={changeExpand} />
            < MessageSearch />
            <MessageContents ENDPOINT={ENDPOINT} />
        </div >
    )
}

export default MessageTab