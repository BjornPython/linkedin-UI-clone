import React from 'react'
import styles from "./page.module.css"
import Notifications from '../../components/notifications/Notifications'
import NotifLeftBanner from '@/components/notifications/NotifLeftBanner'
import RightAd from '@/components/notifications/RightAd'



const getNotifs = async () => {
    const res = await fetch(`${process.env.API_ENDPOINT}/notifs`, { cache: "no-cache" })
    const data = await res.json()
    return data
}


async function page() {
    const notifs = await getNotifs()
    console.log("NOTIFS: ", notifs);
    return (
        <div className={styles.notifsPage}>
            <div className={styles.notifsContents}>
                <NotifLeftBanner />
                <Notifications notifs={notifs} />
                <RightAd />
            </div>
        </div>
    )
}

export default page