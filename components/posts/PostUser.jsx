import React from 'react'
import Image from 'next/image'
import Circle from "../../public/svgs/circle.svg"
function PostUser({ name, bio, dpURL }) {
    return (
        <div className='post-user-container'>
            {dpURL
                ?
                <img src={dpURL} className="post-user-pic" />
                :
                <Circle className="post-user-icon" />
            }

            <div className="user-info-div">
                <p>{name}</p>
                <p>{bio}</p>
                <p>1w</p>
            </div>


        </div>
    )
}

export default PostUser