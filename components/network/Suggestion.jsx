import Image from "next/image"
import banner from "../../public/images/banner.png"
import Circle from "../../public/svgs/circle.svg"
function Suggestion({ styles }) {
    return (
        <div className={styles.suggestionDiv}>
            <Image src={banner} alt="" className={styles.suggestionBanner} />

            <div className={styles.suggestionInfo}>
                <Circle className={styles.sgUserIcn} />
                <p>Nathan Flores</p>
                <p>Bio</p>

                <div className={styles.followBtn}>
                    <p>+ Follow</p>
                </div>

            </div>
        </div>
    )
}

export default Suggestion