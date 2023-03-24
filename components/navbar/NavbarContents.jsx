"use client"
import "./navbar.css"
import MainButtons from './MainButtons'
import Search from './Search'
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'

function NavbarContents() {

    return (
        <div className='nav-contents'>
            <Search />
            <MainButtons />
        </div>
    )
}

export default NavbarContents