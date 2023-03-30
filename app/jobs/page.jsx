import styles from './page.module.css'
import JobsLeftBanner from '@/components/jobs/JobsLeftBanner'
import JobsMainContent from '@/components/jobs/JobsMainContent'
import RightBanner from '@/components/jobs/RightBanner'
function page() {
    return (
        <div className={styles.jobPage}>
            <div className={styles.jobContents}>
                <JobsLeftBanner styles={styles} />
                <JobsMainContent styles={styles} />
                <RightBanner styles={styles} />
            </div>
        </div>
    )
}

export default page