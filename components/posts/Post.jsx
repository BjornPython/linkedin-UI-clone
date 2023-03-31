"use client"
import PostUser from "./PostUser"
import Image from "next/image"
import PostActions from "./PostActions"
import "./posts.css"
import background from "../../public/images/background.jpg"
import samplePost from "../../public/images/samplePost.png"
import { useState, useEffect } from "react"


const getPostInfo = async (postId) => {
    try {
        const res = await fetch(`http://localhost:8000/posts/post/${postId}`, { cache: "no-cache" })
        const data = res.json()
        return data
    } catch (err) { throw err }
}

const getUserInfo = async (uid) => {
    try {
        const res = await fetch(`http://localhost:8000/users/ids/${uid}`, { cache: "no-cache" })
        const data = await res.json()
        return data.user
    } catch (err) { throw err }
}

function Post({ postId }) {

    const [postInfo, setPostInfo] = useState({ caption: "", userId: "", imageURL: "" })
    const { caption, userId, imageURL } = postInfo
    const [userInfo, setUserInfo] = useState({ name: "", bio: "", dpURL: null, bannerURL: "" })
    const { name, bio, dpURL } = userInfo
    useEffect(() => {
        const info = async () => {
            const info = await getPostInfo(postId)
            setPostInfo(info.postInfo)
        }
        info()
    }, [])

    useEffect(() => {
        if (userId === "") { return }
        const callGetUserInfo = async () => {
            const info = await getUserInfo(userId)
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