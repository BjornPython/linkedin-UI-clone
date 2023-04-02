"use client"
import React, { useEffect, useState } from 'react'
import Post from './Post'
import InfoLeft from '../NewsfeedInfo/left/InfoLeft'
import InfoRight from '../NewsfeedInfo/right/InfoRight'
function Posts({ ENDPOINT, postIds }) {


    const [scrollVal, setSCrollVal] = useState(0)

    useEffect(() => {
        document.addEventListener("scroll", (event) => {
            setSCrollVal(window.scrollY)
        })
    }, [])

    return (
        <>
            <InfoLeft scrollVal={scrollVal} />
            <div >
                {postIds.map(postId => {
                    return <Post key={postId} postId={postId} ENDPOINT={ENDPOINT} />
                })}

            </div>
            <InfoRight scrollVal={scrollVal} ENDPOINT={ENDPOINT} />
        </>
    )
}

export default Posts