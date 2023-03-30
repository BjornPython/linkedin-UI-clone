import Job from "./Job"
import RecommendedJob from "./RecommendedJob"

const getJobs = async () => {
    const res = await fetch("http://localhost:8000/jobs/", { cache: "no-cache" })
    const data = await res.json()
    return data
}

async function JobsMainContent({ styles }) {
    const jobs = await getJobs()
    console.log("JOBS: ", jobs);
    const RecommendedJobs = ["job4", "job5", "job6"]
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
                    <br />
                    {RecommendedJobs.map(jobId => {
                        return <RecommendedJob key={jobId} info={jobs[jobId]} styles={styles} />
                    })}

                </div>
            </div>
        </div>
    )
}

export default JobsMainContent