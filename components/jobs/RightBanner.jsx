import RightBannerInfo from "./RightBannerInfo"
import "../NewsfeedInfo/newsfeedInfo.css"

function RightBanner({ styles }) {
    return (
        <div className={styles.rightBanner}>
            <RightBannerInfo styles={styles} />
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
    )
}

export default RightBanner