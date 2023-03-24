import React from 'react'
import styles from "./navbar.module.css"
import NavbarContents from '@/components/navbar/NavbarContents'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <NavbarContents />
        </div>
    )
}

export default Navbar