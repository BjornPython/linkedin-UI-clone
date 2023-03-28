import Image from "next/image"
import banner from "../../public/images/banner.png"
import Circle from "../../public/svgs/circle.svg"

function Suggestion({ userInfo, styles }) {

    const { name, bio, dpURL, bannerURL } = userInfo

    return (
        <div className={styles.suggestionDiv}>
            <img src={bannerURL} alt="" className={styles.suggestionBanner} />

            <div className={styles.suggestionInfo}>
                <img src={dpURL} className={styles.sgUserIcn} />
                <p>{name}</p>
                <p>{bio}</p>

                <div className={styles.followBtn}>
                    <p>+ Follow</p>
                </div>

            </div>
        </div>
    )
}

export default Suggestion