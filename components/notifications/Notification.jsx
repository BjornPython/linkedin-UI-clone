import React from 'react'
import Dots from "../../public/svgs/dotss.svg"
import styles from "../../app/notifications/page.module.css"

function Notification({ notif }) {
    return (
        <div className={styles.notificationContainer}>
            <img src={notif.imageURL} alt="" className={styles.notifImage} />
            <div className={styles.notifInfo}>
                <p> <b style={{ color: "black" }}>{notif.name}</b> {notif.text}</p>
            </div>
            <div className={styles.settingsContainer}>
                <p>{notif.time}</p>
                <div className={styles.icnContainer}>
                    <Dots className={styles.settingsIcon} />
                </div>
            </div>
        </div>
    )
}

export default Notification