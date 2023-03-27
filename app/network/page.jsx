import React from 'react'
import styles from "./page.module.css"
import Network from "../../public/svgs/network.svg"
import Events from "../../public/svgs/events.svg"
import Pages from "../../public/svgs/pages.svg"
import Newsletter from "../../public/svgs/newsletter.svg"
import Hashtag from "../../public/svgs/hashtag.svg"
import Contacts from "../../public/svgs/contacts.svg"
import Following from "../../public/svgs/following.svg"
import LeftBanner from '@/components/network/LeftBanner'
import MainContents from '@/components/network/MainContents'


function page() {
    return (
        <div className={styles.networkPage}>
            <div className={styles.networkContents}>
                <LeftBanner styles={styles} />
                <MainContents styles={styles} />
            </div>
        </div>
    )
}

export default page