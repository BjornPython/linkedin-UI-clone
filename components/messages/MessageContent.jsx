import React from 'react'
import MessageAd from './MessageAd'
import Chats from './Chats'
function MessageContent({ styles }) {
    return (
        <div className={styles.messageContent}>

            <div className={styles.messageContainer}>
                <Chats styles={styles} />
            </div>

            <div className={styles.messageAd}>
                <MessageAd />
            </div>

        </div>
    )
}

export default MessageContent