import React from 'react'
import Suggestions from './Suggestions'
function MainContents({ styles }) {
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