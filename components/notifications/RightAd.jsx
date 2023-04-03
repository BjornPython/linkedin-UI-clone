import React from 'react'
import Image from 'next/image'
import Ad from "../../public/images/ad.png"
import "../NewsfeedInfo/newsfeedInfo.css"
import styles from "../../app/notifications/page.module.css"

function RightAd() {
    return (
        <div className={styles.rightContainer}>
            <div className={styles.rightAd}>
                <Image src={Ad} className={styles.rightAdImage} alt="" />
                <div className="site-infos">
                    <div className="block">
                        <p>About</p>
                        <p>Accesibility</p>
                        <p>Help Center</p>
                    </div>
                    <div className="block">
                        <p>Privacy & Terms</p>
                        <p>Ad Choices</p>
                    </div>
                    <div className="block">
                        <p>Advertising</p>
                        <p>Business Services</p>
                    </div>
                    <div className="block">
                        <p>Get the Linkedin App</p>
                        <p>More</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RightAd