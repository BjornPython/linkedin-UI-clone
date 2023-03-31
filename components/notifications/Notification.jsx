import React from 'react'
import Dots from "../../public/svgs/dotss.svg"
function Notification({ notif, styles }) {
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