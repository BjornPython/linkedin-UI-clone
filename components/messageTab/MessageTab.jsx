"use client"

import { useState } from "react"
import "./messageTab.css"
import MessageHeader from "./MessageHeader"
import MessageSearch from "./MessageSearch"
import MessageContents from "./MessageContents"
function MessageTab() {
    const [expand, setExpand] = useState(false)


    const changeExpand = (val) => {
        setExpand(val)
    }

    return (
        <div className={`message-tab ${expand && "show-message-tab"}`} >
            <MessageHeader expand={expand} changeExpand={changeExpand} />
            < MessageSearch />
            <MessageContents />
        </div >
    )
}

export default MessageTab