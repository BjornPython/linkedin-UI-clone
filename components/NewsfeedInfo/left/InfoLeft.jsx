import React from 'react'
import styles from "./infoLeft.module.css"
import LeftProfile from './LeftProfile'
import LeftDiscover from './LeftDiscover'

function InfoLeft({ scrollVal }) {

    return (
        <div className={styles.infoLeftContainer}>
            <LeftProfile styles={styles} />
            <LeftDiscover scrollVal={scrollVal} />
        </div>
    )
}

export default InfoLeft