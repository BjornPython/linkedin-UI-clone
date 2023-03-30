import Save from "../../public/svgs/save.svg"
import Prep from "../../public/svgs/prep.svg"
import Resume from "../../public/svgs/resume.svg"
import Setting from "../../public/svgs/setting.svg"
import Yt from "../../public/svgs/yt.svg"
import Check from "../../public/svgs/check.svg"
import Notif from "../../public/svgs/notif.svg"

function jobsLeftBanner({ styles }) {
    return (
        <div className={styles.leftBanner}>
            <div className={styles.leftBannerContent}>
                <Save className={styles.leftBannerIcon} />
                <p>My jobs</p>
            </div>
            <div className={styles.leftBannerContent}>
                <Notif className={styles.leftBannerIcon} />
                <p>Job alerts</p>
            </div>
            <div className={styles.leftBannerContent}>
                <Check className={styles.leftBannerIcon} />
                <p>Demonstrate skills</p>
            </div>
            <div className={styles.leftBannerContent}>
                <Prep className={styles.leftBannerIcon} />
                <p>Interview prep</p>
            </div>
            <div className={styles.leftBannerContent}>
                <Resume className={styles.leftBannerIcon} />
                <p>Resume builder</p>
            </div>
            <div className={styles.leftBannerContent}>
                <Yt className={styles.leftBannerIcon} />
                <p>Job seeker guidance</p>
            </div>
            <div className={styles.leftBannerContent}>
                <Setting className={styles.leftBannerIcon} />
                <p>Application settings</p>
            </div>
        </div>
    )
}

export default jobsLeftBanner