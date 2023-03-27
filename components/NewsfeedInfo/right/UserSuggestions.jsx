"use client"
import Circle from "../../../public/svgs/circle.svg"
import "../newsfeedInfo.css"

function UserSuggestions() {
    return (
        <div className='user-suggestions'>
            <div className="user-suggestion">
                <Circle className="user-sg-icn" />
                <div className="user-name-bio-follow">
                    <p className="name-sg">Kevin Careng</p>
                    <p className="bio-sg">President of Level inc.</p>
                    <button className="follow-btn">+ Follow</button>
                </div>
            </div>

            <div className="user-suggestion">
                <Circle className="user-sg-icn" />
                <div className="user-name-bio-follow">
                    <p className="name-sg">Rob Sebastian</p>
                    <p className="bio-sg">Civil Engineer</p>
                    <button className="follow-btn">+ Follow</button>
                </div>
            </div>

            <div className="user-suggestion">
                <Circle className="user-sg-icn" />
                <div className="user-name-bio-follow">
                    <p className="name-sg">Samantha Kurt</p>
                    <p className="bio-sg">Chief Engineer</p>
                    <button className="follow-btn">+ Follow</button>
                </div>
            </div>

        </div>
    )
}

export default UserSuggestions