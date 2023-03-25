"use client"
import Circle from "../../../public/svgs/circle.svg"
import "../newsfeedInfo.css"

function UserSuggestions() {
    return (
        <div className='user-suggestions'>
            <div className="user-suggestion">
                <Circle className="user-sg-icn" />
                <div className="user-name-bio-follow">
                    <p className="name-sg">Francis Kong</p>
                    <p className="bio-sg">President of chuchu</p>
                    <button className="follow-btn">+ Follow</button>
                </div>
            </div>

            <div className="user-suggestion">
                <Circle className="user-sg-icn" />
                <div className="user-name-bio-follow">
                    <p className="name-sg">Francis Kong</p>
                    <p className="bio-sg">President of chuchu</p>
                    <button className="follow-btn">+ Follow</button>
                </div>
            </div>

            <div className="user-suggestion">
                <Circle className="user-sg-icn" />
                <div className="user-name-bio-follow">
                    <p className="name-sg">Francis Kong</p>
                    <p className="bio-sg">President of chuchu</p>
                    <button className="follow-btn">+ Follow</button>
                </div>
            </div>

        </div>
    )
}

export default UserSuggestions