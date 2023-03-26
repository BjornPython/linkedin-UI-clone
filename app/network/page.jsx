import React from 'react'
import styles from "./page.module.css"
import Network from "../../public/svgs/network.svg"
import Events from "../../public/svgs/events.svg"
import Pages from "../../public/svgs/pages.svg"
import Newsletter from "../../public/svgs/newsletter.svg"
import Hashtag from "../../public/svgs/hashtag.svg"
import Contacts from "../../public/svgs/contacts.svg"
import Following from "../../public/svgs/following.svg"
function page() {
    return (
        <div className={styles.networkPage}>
            <div className={styles.networkContents}>
                <div className={styles.leftBanner}>
                    <p>Manage my Network</p>

                    <div className={styles.networkInfo}>
                        <Network />
                        <p>Connections</p>
                    </div>
                    <div className={styles.networkInfo}>
                        <Contacts />
                        <p>Contacts</p>
                    </div>
                    <div className={styles.networkInfo}>
                        <Following />
                        <p>Following & followers</p>
                    </div>
                    <div className={styles.networkInfo}>
                        <Network />
                        <p>Groups</p>
                    </div>
                    <div className={styles.networkInfo}>
                        <Events />
                        <p>Events</p>
                    </div>
                    <div className={styles.networkInfo}>
                        <Pages />
                        <p>Pages</p>
                    </div>
                    <div className={styles.networkInfo}>
                        <Newsletter />
                        <p>Newsletter</p>
                    </div>
                    <div className={styles.networkInfo}>
                        <Hashtag />
                        <p>Hashtags</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page