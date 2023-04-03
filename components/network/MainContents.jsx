import React from 'react'
import Suggestions from './Suggestions'
import styles from "../../app/network/page.module.css"


function MainContents() {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.contentOne}>
                <p>No Pending Invitations</p>
                <p style={{ cursor: "pointer" }}>Manage</p>
            </div>
            <div className={styles.contentOne}>
                <p>Celebrations</p>
                <p style={{ cursor: "pointer" }}>See all</p>
            </div>
            <Suggestions styles={styles} />
        </div>
    )
}

export default MainContents