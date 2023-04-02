"use client"
import { useEffect, useState } from "react"
import Circle from "../../../public/svgs/circle.svg"
import "../newsfeedInfo.css"



function UserSuggestions({ ENDPOINT }) {
    const [userSuggestions, setUserSuggestions] = useState({})
    console.log("ENDPOINT: ", ENDPOINT);
    useEffect(() => {
        const getUsers = async () => {
            const res = await fetch(`${ENDPOINT}/users/suggestions`, { cache: "no-cache" })
            const data = await res.json()
            console.log("DATA: ", data);
            setUserSuggestions(data)
        }
        getUsers()
    }, [])
    return (
        <div className='user-suggestions'>

            {Object.entries(userSuggestions).map((userId) => {
                const { name, bio, dpURL } = userSuggestions[userId[0]]
                return (
                    <div key={`sg-${name}`} className="user-suggestion">
                        <img src={dpURL} alt="" className="user-sg-icn" />
                        <div className="user-name-bio-follow">
                            <p className="name-sg">{name}</p>
                            <p className="bio-sg">{bio}</p>
                            <button className="follow-btn">+ Follow</button>
                        </div>
                    </div>
                )
            })
            }


            {/* <div className="user-suggestion">
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
            </div> */}

        </div>
    )
}

export default UserSuggestions