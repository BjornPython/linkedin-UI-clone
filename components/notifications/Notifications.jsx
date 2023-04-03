import Notification from "./Notification"
import styles from "../../app/notifications/page.module.css"

function Notifications({ notifs }) {
    return (
        <div className={styles.notifsContainer}>
            {notifs.map((notif, index) => {
                return <Notification key={index} notif={notif} styles={styles} />
            })}
        </div>
    )
}

export default Notifications