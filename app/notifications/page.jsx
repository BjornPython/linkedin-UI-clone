import React from 'react'
import styles from "./page.module.css"
import Notifications from '../../components/notifications/Notifications'
const getNotifs = async () => {
    const res = await fetch("http://localhost:8000/notifs", { cache: "no-cache" })
    const data = await res.json()
    return data
}


async function page() {
    const notifs = await getNotifs()
    console.log("NOTIFS: ", notifs);
    return (
        <div className={styles.notifsPage}>
            <div className={styles.notifsContents}>
                <Notifications styles={styles} notifs={notifs} />
            </div>
        </div>
    )
}

export default page