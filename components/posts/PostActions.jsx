"use client"
import Like from "../../public/svgs/like.svg"
import Comment from "../../public/svgs/comment.svg"
import Repost from "../../public/svgs/repost.svg"
import Send from "../../public/svgs/send.svg"


function PostActions() {
    return (
        <div className="post-actions-container">
            <div className="action-btn">
                <Like className="action-icn" />
                <p>Like</p>
            </div>
            <div className="action-btn">
                <Comment className="action-icn" />
                <p>Comment</p>
            </div>
            <div className="action-btn">
                <Repost className="action-icn" />
                <p>Repost</p>
            </div>
            <div className="action-btn">
                <Send className="action-icn" />
                <p>Send</p>
            </div>
        </div>
    )
}

export default PostActions