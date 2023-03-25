"use client"
import React, { useEffect, useState } from 'react'
import Post from './Post'
import InfoLeft from '../NewsfeedInfo/left/InfoLeft'
import InfoRight from '../NewsfeedInfo/right/InfoRight'
function Posts() {
    const [scrollVal, setSCrollVal] = useState(0)

    useEffect(() => {
        document.addEventListener("scroll", (event) => {
            console.log("EVENT: ", window.scrollY);
            setSCrollVal(window.scrollY)
        })
    }, [])

    return (
        <>
            <InfoLeft scrollVal={scrollVal} />
            <div className="posts-container">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            <InfoRight scrollVal={scrollVal} />
        </>
    )
}

export default Posts