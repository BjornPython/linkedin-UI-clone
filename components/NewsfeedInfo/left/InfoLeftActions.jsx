"use client"
import "../newsfeedInfo.css"
import Image from "next/image"
import dp from "../../../public/images/dp.jpg"
import Link from "next/link"


function InfoLeftActions() {

    return (
        <div className="left-info">
            <Link href={""} >
                <Image src={dp} className="newsfeed-dp" alt="" />
            </Link>

            <p className="newsfeed-username">Nathan Flores</p>

            <p className="newsfeed-bio">Web Developer | React | JavaScript | NodeJS | ExpressJS | MongoDB | Firebase</p>


            <div className="connection-container">
                <p className="connections">Connections</p>
                <p className="grow-ur-network">Grow your network</p>
            </div>

            <div className="access-container">
                <p className="access-one">Access exlusive tools & insights</p>
                <p className="access-two">Grow your network</p>
            </div>

            <div className="my-items-div">
                <p>My items</p>
            </div>

        </div>
    )
}

export default InfoLeftActions