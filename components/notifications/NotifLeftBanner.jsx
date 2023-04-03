import React from 'react'
import styles from "../../app/notifications/page.module.css"

function NotifLeftBanner() {
    return (
        <div className={styles.leftContainer}>

            <div className={styles.leftBanner}>
                <p>Manage your Notifications</p>
                <p>View Settings</p>
            </div>
        </div>

    )
}

export default NotifLeftBanner