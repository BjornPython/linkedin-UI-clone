import Image from "next/image"
import resSample from "../../public/gif/resSample.gif"
import styles from "../../app/jobs/page.module.css"

function RightBannerInfo() {
    return (
        <div className={styles.rightBannerInfo}>
            <div className={styles.infoContent}>
                <div className={styles.seekerGuide}>
                    <p>Job seeker guidance</p>
                    <p>Recommended based on your activity</p>
                </div>
                <div className={styles.improveRes}>
                    <p>I want to improve my resume</p>
                    <Image src={resSample} className={styles.img} alt=""></Image>
                </div>
                <p className={styles.explore}>Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.</p>
                <p className={styles.showMore}>Show more</p>
            </div>

        </div>
    )
}

export default RightBannerInfo