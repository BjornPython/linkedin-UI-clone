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
                    <div className={styles.chatHeaderIcn}>
                        <Dots className={styles.chatIcon} />
                    </div>
                    <div className={styles.chatHeaderIcn}>
                        <New className={styles.chatIcon} />
                    </div>
                </div>
            </div>
            <MessageSearch />
            <MessageContents height={"590px"} ENDPOINT={process.env.API_ENDPOINT} />
        </div>
    )
}

export default Chats