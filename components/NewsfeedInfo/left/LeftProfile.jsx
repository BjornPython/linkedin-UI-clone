import React from 'react'
import Image from 'next/image'
import banner from "../../../public/images/banner.png"
import InfoLeftActions from './InfoLeftActions'
function LeftProfile({ styles }) {
    return (
        <div className={styles.leftProfileContainer}>
            <Image src={banner} alt="" className={styles.userBanner} />
            <InfoLeftActions />
        </div>
    )
}

export default LeftProfile