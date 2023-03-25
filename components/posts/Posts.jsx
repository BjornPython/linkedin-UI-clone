"use client"
import React, { useEffect, useState } from 'react'
import Post from './Post'
import InfoLeft from '../NewsfeedInfo/InfoLeft'
function Posts() {
    const [scrollVal, setSCrollVal] = useState(0)

    useEffect(() => {
        document.addEventListener("scroll", (event) => {
            console.log("EVENT: ", window.scrollY);
        })
    }, [])

    return (
        <>
            <InfoLeft />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </>
    )
}

export default Posts