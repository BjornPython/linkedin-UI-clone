import Network from "../../public/svgs/network.svg"
import Events from "../../public/svgs/events.svg"
import Pages from "../../public/svgs/pages.svg"
import Newsletter from "../../public/svgs/newsletter.svg"
import Hashtag from "../../public/svgs/hashtag.svg"
import Contacts from "../../public/svgs/contacts.svg"
import Following from "../../public/svgs/following.svg"
import LeftAd from "./LeftAd"

function LeftBanner({ styles }) {
    return (
        <div className={styles.leftBanner}>
            <p>Manage my Network</p>
            <div className={styles.networkInfo}>
                <Network className={styles.icon} />
                <p>Connections</p>
            </div>
            <div className={styles.networkInfo}>
                <Contacts className={styles.icon} />
                <p>Contacts</p>
            </div>
            <div className={styles.networkInfo}>
                <Following className={styles.icon} />
                <p>Following & followers</p>
            </div>
            <div className={styles.networkInfo}>
                <Network className={styles.icon} />
                <p>Groups</p>
            </div>
            <div className={styles.networkInfo}>
                <Events className={styles.icon} />
                <p>Events</p>
            </div>
            <div className={styles.networkInfo}>
                <Pages className={styles.icon} />
                <p>Pages</p>
            </div>
            <div className={styles.networkInfo}>
                <Newsletter className={styles.icon} />
                <p>Newsletter</p>
            </div>
            <div className={styles.networkInfo}>
                <Hashtag className={styles.icon} />
                <p>Hashtags</p>
            </div>
            <LeftAd styles={styles} />
        </div>
    )
}

export default LeftBanner