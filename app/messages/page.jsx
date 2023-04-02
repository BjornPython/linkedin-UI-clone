import React from 'react'
import styles from "./page.module.css"
import MessageContent from '@/components/messages/MessageContent'

function page() {

    console.log("ENDPOINT IN PAGE: ", process.env.API_ENDPOINT);

    return (
        <div className={styles.messagePage}>
            <MessageContent styles={styles} ENDPOINT={process.env.API_ENDPOINT} />
        </div>
    )
}

export default page