import styles from './page.module.css'
import JobsLeftBanner from '@/components/jobs/JobsLeftBanner'
import JobsMainContent from '@/components/jobs/JobsMainContent'
import RightBanner from '@/components/jobs/RightBanner'
function page() {
    return (
        <div className={styles.jobPage}>
            <div className={styles.jobContents}>
                <JobsLeftBanner />
                <JobsMainContent />
                <RightBanner />
            </div>
        </div>
    )
}

export default page