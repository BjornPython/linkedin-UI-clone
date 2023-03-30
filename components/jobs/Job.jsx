import React from 'react'

function Job({ info, styles }) {
    const { title, location } = info
    return (
        <div className={styles.jobs}>
            <p>{title}</p>
            <p>{location}</p>
        </div>
    )
}

export default Job