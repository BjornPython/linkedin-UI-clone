import Job from "./Job"
import Save from "../../public/svgs/emptySave.svg"
const getJobs = async () => {
    const res = await fetch("http://localhost:8000/jobs/", { cache: "no-cache" })
    const data = await res.json()
    return data
}

async function JobsMainContent({ styles }) {
    const jobs = await getJobs()
    const sampleURL = "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/jobDps%2F6.png?alt=media&token=0356a760-d50d-4525-aa1d-993ae32fbef0"
    return (
        <div className={styles.mainContent}>
            <div className={styles.recent}>
                <div className={styles.recentContents}>
                    <div className={styles.jobSearches}>
                        <p>Recent job searches</p>
                        <p>clear</p>
                    </div>
                    <br />

                    {Object.entries(jobs).map(job => {
                        return <Job key={job[0]} info={job[1]} styles={styles} />
                    })}
                </div>


            </div>
            <div className={styles.recent}>
                <div className={styles.recentContents}>
                    <div className={styles.recommend}>
                        <p>Recommended for you</p>
                        <p>Based on your profile and search history</p>
                    </div>

                    <div className={styles.recommendJobs}>
                        <img src={sampleURL} alt="" className={styles.sampleURL} />

                        <div className={styles.JobsTxt}>
                            <p>Full Stack Developer</p>
                            <p>Company</p>
                            <p>Philippines</p>
                        </div>

                        <div className={styles.emptyIcnCter}>
                            <Save className={styles.emptySaveIcn} />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default JobsMainContent