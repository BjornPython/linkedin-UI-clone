"use client"
import PostUser from "./PostUser"
import Image from "next/image"
import PostActions from "./PostActions"
import "./posts.css"
import background from "../../public/images/background.jpg"
import { useState, useEffect } from "react"


const getPostInfo = async (postId) => {
    try {
        console.log("FETCHING POSTID: ", postId);
        const res = await fetch(`http://localhost:8000/posts/post/${postId}`, { cache: "no-cache" })
        const data = res.json()
        return data
    } catch (err) { throw err }
}


function Post({ postId }) {

    const [postInfo, setPostInfo] = useState({ caption: "", userId: "", imageURL: "" })
    const { caption, userId, imageURL } = postInfo
    useEffect(() => {
        const info = async () => {
            const info = await getPostInfo(postId)
            console.log("INFO: ", info);
            setPostInfo(info.postInfo)
        }
        info()
    }, [])



    const content = "Sample content, caption lorem ipsum duh yeah bro hahaha wt am i ven saying. "
    return (
        <div className="post-container">
            <PostUser imageURL={imageURL} />
            <div className="post-caption">
                <p>{caption}</p>
            </div>
            <Image src={background} className="post-img" alt="" />
            <PostActions />
        </div>
    )
}

export default Post