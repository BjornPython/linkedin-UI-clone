"use client"
import PostUser from "./PostUser"
import Image from "next/image"
import PostActions from "./PostActions"
import "./posts.css"
import background from "../../public/images/background.jpg"
import { useState, useEffect } from "react"
const getPostInfo = async () => {

}


function Post({ postId }) {

    const [postInfo, setPostInfo] = useState(null)

    useEffect(() => {
        const info = async () => {
            const res = getPostInfo(postId)
            setPostInfo(res)
        }
    }, [])

    // const { postUserId, postImg, caption } = postInfo
    const content = "Sample content, caption lorem ipsum duh yeah bro hahaha wt am i ven saying. "
    return (
        <div className="post-container">
            <PostUser />
            <div className="post-caption">
                <p>{content}</p>
            </div>
            <Image src={background} className="post-img" alt="" />
            <PostActions />
        </div>
    )
}

export default Post