import React from 'react'
import "./messages.css"
import MessageSearch from '../messageTab/MessageSearch'
import MessageContents from '../messageTab/MessageContents'
import Dots from "../../public/svgs/dotss.svg"
import New from "../../public/svgs/new.svg"
function Chats({ styles }) {
    return (
        <div className={styles.chatsContainer}>
            <div className={styles.messageHeader}>
                <p>Messaging</p>
                <div className={styles.chatIcons}>
                    <div className="msg-tab-icn">
                        <Dots className={styles.chatIcon} />
                    </div>
                    <div className="msg-tab-icn">
                        <New className={styles.chatIcon} />
                    </div>
                </div>
            </div>
            <MessageSearch />
            <MessageContents height={"590px"} />
        </div>
    )
}

export default Chats