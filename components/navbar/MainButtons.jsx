"use client"
import Link from "next/link"
import { useState } from "react"
import Home from "../../public/svgs/home.svg"
import Jobs from "../../public/svgs/jobs.svg"
import Msg from "../../public/svgs/msg.svg"
import Network from "../../public/svgs/network.svg"
import Notif from "../../public/svgs/notif.svg"
import Dots from "../../public/svgs/dots.svg"
import Circle from "../../public/svgs/circle.svg"
function MainButtons() {

    const [currentPage, setCurrentPage] = useState("home")

    return (
        <div className="main-btns">
            <Link href={"/about"}>
                <div className="nav-btn">
                    <Home className="nav-btn-icn" />
                    <p>Home</p>
                </div>
            </Link>
            <Link href={"/about"}>
                <div className="nav-btn">
                    <Network className="nav-btn-icn" />
                    <p>My Network</p>
                </div>
            </Link>

            <Link href={"/about"}>
                <div className="nav-btn">
                    <Jobs className="nav-btn-icn" />
                    <p>Jobs</p>
                </div>
            </Link>

            <Link href={"/about"}>
                <div className="nav-btn">
                    <Msg className="nav-btn-icn" />
                    <p>Messaging</p>
                </div>
            </Link>

            <Link href={"/about"}>
                <div className="nav-btn">
                    <Notif className="nav-btn-icn" />
                    <p>Notifications</p>
                </div>
            </Link>
            <Link href={"/about"}>
                <div className="nav-btn" style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}>
                    <Circle className="nav-btn-icn" style={{ width: "24px", marginBottom: "2px" }} />
                    <p>Me</p>
                </div>
            </Link>

            <Link href={"/about"}>
                <div className="nav-btn">
                    <Dots className="nav-btn-icn" />
                    <p>Work</p>
                </div>
            </Link>



            <div className="prem-txt">
                <p>Try Premium for free</p>
            </div>
        </div>
    )
}

export default MainButtons