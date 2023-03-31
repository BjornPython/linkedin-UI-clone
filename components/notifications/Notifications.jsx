import Notification from "./Notification"

function Notifications({ notifs, styles }) {
    return (
        <div className={styles.notifsContainer}>
            {notifs.map((notif, index) => {
                return <Notification key={index} notif={notif} styles={styles} />
            })}
        </div>
    )
}

export default Notifications