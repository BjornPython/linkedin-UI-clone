"use client"
import PostUser from "./PostUser"
import PostActions from "./PostActions"
import "./posts.css"

import { useState, useEffect } from "react"


const getPostInfo = async (ENDPOINT, postId) => {
    try {
        const res = await fetch(`${ENDPOINT}/posts/post/${postId}`, { cache: "no-cache" })
        const data = res.json()
        return data
    } catch (err) { throw err }
}

const getUserInfo = async (ENDPOINT, uid) => {
    try {
        const res = await fetch(`${ENDPOINT}/users/ids/${uid}`, { cache: "no-cache" })
        const data = await res.json()
        return data.user
    } catch (err) { throw err }
}

function Post({ ENDPOINT, postId }) {


    const [postInfo, setPostInfo] = useState({ caption: "", userId: "", imageURL: "" })
    const { caption, userId, imageURL } = postInfo
    const [userInfo, setUserInfo] = useState({ name: "", bio: "", dpURL: null, bannerURL: "" })
    const { name, bio, dpURL } = userInfo
    useEffect(() => {
        const info = async () => {
            const info = await getPostInfo(ENDPOINT, postId)
            setPostInfo(info.postInfo)
        }
        info()
    }, [])

    useEffect(() => {
        if (userId === "") { return }
        const callGetUserInfo = async () => {
            const info = await getUserInfo(ENDPOINT, userId)
            setUserInfo(info)

        }
        callGetUserInfo()
    }, [userId])


    return (
        <div className="post-container">
            <PostUser name={name} bio={bio} dpURL={dpURL} />
            <div className="post-caption">
                <p>{caption}</p>
            </div>
            <img src={imageURL} className="post-img" alt="" />
            <PostActions />
        </div>
    )
}

export default Post