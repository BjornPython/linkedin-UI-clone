"use client"

import { useState, useRef } from "react"
import "./messageTab.css"
import Circle from "../../public/svgs/circle.svg"
import Dots from "../../public/svgs/dotss.svg"
import Down from "../../public/svgs/down.svg"
import New from "../../public/svgs/new.svg"


function MessageTab() {
    const tab = useRef(null)
    const [expand, setExpand] = useState(false)

    const handleMsgTabClick = (e) => {

        if (tab.current == e.target) {
            setExpand(!expand)
        }
    }

    return (
        <div className={`message-tab ${expand && "show-message-tab"}`} >
            <div ref={tab} className="message-head" onClick={(e) => { handleMsgTabClick(e) }}>
                <Circle className="msg-circle-icn" />
                <p>Messaging</p>

                <div className="messaging-icons">

                    <div className="msg-tab-icn">
                        <Dots />
                    </div>
                    <div className="msg-tab-icn">
                        <New />
                    </div>
                    <div className="msg-tab-icn">
                        <Down />
                    </div>

                </div>
            </div>
        </div >
    )
}

export default MessageTab