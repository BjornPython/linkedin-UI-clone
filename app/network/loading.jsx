import styles from './page.module.css'

function loading() {
    return (
        <div className={styles.loadingPage}>
            <div className={styles.loadingContents}>
                <div className={styles.left}>
                    <span className={styles.content}> </span>
                    <span className={styles.content}> </span>
                    <span className={styles.content}> </span>
                    <span className={styles.content}> </span>
                </div>
                <div className={styles.right}>
                    <div className={styles.item}>
                        <span className={styles.content}> </span>

                    </div>
                    <div className={styles.item}>
                        <span className={styles.content}> </span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.content}> </span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.content}> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default loading