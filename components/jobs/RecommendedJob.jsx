import Save from "../../public/svgs/emptySave.svg"
import Seen from "../../public/svgs/seen.svg"

function RecommendedJob({ info, styles }) {
    return (
        <div className={styles.recommendJobs}>
            <img src={info.DpURL} alt="" className={styles.sampleURL} />

            <div className={styles.JobsTxt}>
                <p>{info.title}</p>
                <p>{info.company}</p>
                <p>{info.location}</p>
            </div>

            <div className={styles.seenIcnCter}>
                <Seen />
            </div>

            <div className={styles.emptyIcnCter}>
                <Save className={styles.emptySaveIcn} />
            </div>

        </div>
    )
}

export default RecommendedJob