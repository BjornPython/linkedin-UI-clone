import Job from "./Job"

const getJobs = async () => {
    const res = await fetch("http://localhost:8000/jobs/", { cache: "no-cache" })
    const data = await res.json()
    return data
}

async function JobsMainContent({ styles }) {
    const jobs = await getJobs()
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
        </div>
    )
}

export default JobsMainContent