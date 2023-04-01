import React from 'react'
import styles from "./page.module.css"
import MessageContent from '@/components/messages/MessageContent'
function page() {
    return (
        <div className={styles.messagePage}>
            <MessageContent styles={styles} />
        </div>
    )
}

export default page