import React from 'react'
import styles from "../../app/jobs/page.module.css"
function Job({ info }) {
    const { title, location } = info
    return (
        <div className={styles.jobs}>
            <p>{title}</p>
            <p>{location}</p>
        </div>
    )
}

export default Job