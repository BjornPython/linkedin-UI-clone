import React from 'react'
import MessageAd from './MessageAd'
import Chats from './Chats'
import UserChat from './UserChat'
import styles from "../../app/messages/page.module.css"


function MessageContent() {
    return (
        <div className={styles.messageContent}>

            <div className={styles.messageContainer}>
                <Chats styles={styles} />
                <UserChat styles={styles} />
            </div>

            <div className={styles.messageAd}>
                <MessageAd />
            </div>

        </div>
    )
}

export default MessageContent