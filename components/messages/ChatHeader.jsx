import React from 'react'
import Dots from "../../public/svgs/dotss.svg"
import Call from "../../public/svgs/call.svg"
import Star from "../../public/svgs/star.svg"
import styles from "../../app/messages/page.module.css"

function ChatHeader() {
    return (
        <div className={styles.chatHeader}>
            <div className={styles.nameStatus}>
                <p>Maximo Guzman</p>
                <p>Available on mobile</p>
            </div>

            <div className={styles.chatHeaderIcons}>
                <div className={styles.chatHeaderIcn}>
                    <Dots />
                </div>
                <div className={styles.chatHeaderIcn}>
                    <Call />
                </div>
                <div className={styles.chatHeaderIcn}>
                    <Star />
                </div>
            </div>

        </div>
    )
}

export default ChatHeader