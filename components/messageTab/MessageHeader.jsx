"use client"
import { useRef } from "react"
import Image from "next/image"
import Dots from "../../public/svgs/dotss.svg"
import Down from "../../public/svgs/down.svg"
import New from "../../public/svgs/new.svg"
import myDp from "../../public/images/dp.jpg"


function MessageHeader({ expand, changeExpand }) {

    const tab = useRef(null)


    const handleMsgTabClick = (e) => {
        if (tab.current == e.target) {
            changeExpand(!expand)
        }
    }

    return (
        <div ref={tab} className="message-head" onClick={(e) => { handleMsgTabClick(e) }}>
            <Image src={myDp} className="msg-circle-icn" onClick={() => changeExpand(!expand)} />
            <p onClick={() => changeExpand(!expand)}>Messaging</p>
            <div className="messaging-icons">
                <div className="msg-tab-icn">
                    <Dots />
                </div>
                <div className="msg-tab-icn">
                    <New />
                </div>
                <div className="msg-tab-icn" onClick={() => { changeExpand(!expand) }}>
                    <Down className={`${!expand && "down-icn-active"}`} />
                </div>
            </div>
        </div>
    )
}

export default MessageHeader