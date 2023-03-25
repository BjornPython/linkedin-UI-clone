import React from 'react'
import styles from "./infoLeft.module.css"
import LeftProfile from './LeftProfile'


function InfoLeft() {

    return (
        <div className={styles.infoLeftContainer}>
            <LeftProfile styles={styles} />
        </div>
    )
}

export default InfoLeft