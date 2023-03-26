import React from 'react'
import Image from 'next/image'
import Circle from "../../public/svgs/circle.svg"
function PostUser({ imageURL }) {
    console.log("IMAGE URL: ", imageURL);
    return (
        <div className='post-user-container'>
            {imageURL
                ?
                <img src={imageURL} className="post-user-pic" />
                :
                <Circle className="post-user-icon" />
            }

            <div className="user-info-div">
                <p>Name</p>
                <p>Bio</p>
                <p>Date 12, year</p>
            </div>


        </div>
    )
}

export default PostUser