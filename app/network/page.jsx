import React from 'react'
import styles from "./page.module.css"
import LeftBanner from '@/components/network/LeftBanner'
import MainContents from '@/components/network/MainContents'


function page() {
    return (
        <div className={styles.networkPage}>
            <div className={styles.networkContents}>
                <LeftBanner />
                <MainContents />
            </div>
        </div>
    )
}

export default page