"use client"
import { useEffect, useState } from "react"
import "../newsfeedInfo.css"
function LeftDiscover({ scrollVal }) {

    const [isFixed, setIsFixed] = useState(false)

    useEffect(() => {
        if (scrollVal >= 390 && !isFixed) {
            setIsFixed(true)
        }

        else if (scrollVal <= 390 && isFixed) {
            setIsFixed(false)
        }

    }, [scrollVal])

    return (
        <div className={`discover-container ${isFixed && "discover-div-fixed"}`}>
            <p>Groups</p>
            <p>Events</p>
            <p>Followed Hashtags</p>

            <div className="discover-div">
                <p id="discover-more">Discover more</p>
            </div>
        </div>
    )
}

export default LeftDiscover