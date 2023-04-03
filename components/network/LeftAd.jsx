import Image from "next/image"
import ad from "../../public/images/ad.png"
import styles from "../../app/network/page.module.css"

function LeftAd() {
    return (
        <div className={styles.adContainer}>
            <Image src={ad} alt="" className={styles.adImage} />
            <p className={styles.growNetwork}>Grow your Network</p>

            <div className={styles.siteInfos}>
                <div className={styles.block}>
                    <p>About</p>
                    <p>Accesibility</p>
                    <p>Help Center</p>
                </div>
                <div className={styles.block}>
                    <p>Privacy & Terms</p>
                    <p>Ad Choices</p>
                </div>
                <div className={styles.block}>
                    <p>Advertising</p>
                    <p>Business Services</p>
                </div>
                <div className={styles.block}>
                    <p>Get the Linkedin App</p>
                    <p>More</p>
                </div>
            </div>
        </div >
    )
}

export default LeftAd