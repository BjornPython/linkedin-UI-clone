import PostUser from "./PostUser"
import Image from "next/image"
import PostActions from "./PostActions"
import "./posts.css"
const getPostInfo = async () => {

}

async function Post({ postId }) {

    const postInfo = await getPostInfo(postId)
    // const { postUserId, postImg, caption } = postInfo
    const content = "Sample content, caption lorem ipsum duh yeah bro hahaha wt am i ven saying. "
    return (
        <div className="post-container">
            <PostUser />
            <div className="post-caption">
                <p>{content}</p>
            </div>


            <Image />
            <PostActions />
        </div>
    )
}

export default Post