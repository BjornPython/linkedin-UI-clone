import React from 'react'
import styles from "./infoRight.module.css"
import UserSuggestions from './UserSuggestions'
import Advertisement from './Advertisement'
function InfoRight({ scrollVal }) {
    return (
        <div className={styles.infoRightContainer}>
            <div className={styles.addToFeed}>
                <p className={styles.addFeed}>Add to your feed</p>
                <UserSuggestions />
            </div>
            <Advertisement scrollVal={scrollVal} />
        </div>
    )
}

export default InfoRight