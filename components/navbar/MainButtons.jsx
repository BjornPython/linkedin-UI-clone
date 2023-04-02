"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Home from "../../public/svgs/home.svg"
import Jobs from "../../public/svgs/jobs.svg"
import Msg from "../../public/svgs/msg.svg"
import Network from "../../public/svgs/network.svg"
import Notif from "../../public/svgs/notif.svg"
import Dots from "../../public/svgs/dots.svg"
import InactiveHome from "../../public/svgs/in-home.svg"
import ActiveJobs from "../../public/svgs/jobs-active.svg"
import ActiveMessage from "../../public/svgs/message-active.svg"
import myDp from "../../public/images/dp.jpg"



const defaultState = { home: false, network: false, jobs: false, messages: false, notifications: false }

function MainButtons() {
    // const page = window.location.href.split("/")[3]
    // console.log("PAGE: ", page);
    const path = usePathname()
    console.log("PATH: ", path);
    const [currentPage, setCurrentPage] = useState(path === "/" ? "home" : path.split("/")[1])
    // WIll use for cleaner codemessaging
    const [valHelpers, setValHelpers] = useState(defaultState)
    const { home, network, jobs, messages, notifications } = valHelpers

    useEffect(() => {
        setValHelpers({ ...defaultState, [currentPage]: true })
    }, [currentPage])



    return (
        <div className="main-btns">

            <Link href={"/"} onClick={() => { setCurrentPage("home") }}>
                <div className="nav-btn">
                    {home ? <Home className="nav-btn-icn" /> : <InactiveHome className="nav-btn-icn" />}
                    <p>Home</p>
                    <span className={`nav-target-icn ${home && "nav-active"}`}></span>
                </div>
            </Link>

            <Link href={"/network"} onClick={() => { setCurrentPage("network") }}>
                <div className="nav-btn">
                    <Network className={`"nav-btn-icn" ${network && "network-active"}`} />
                    <p>My Network</p>
                    <span className={`nav-target-icn ${network && "nav-active"}`}></span>
                </div>
            </Link>

            <Link href={"/jobs"} onClick={() => { setCurrentPage("jobs") }}>
                <div className="nav-btn">
                    {jobs ? <ActiveJobs className="nav-btn-icn" /> : <Jobs className="nav-btn-icn" />}
                    <p>Jobs</p>
                    <span className={`nav-target-icn ${jobs && "nav-active"}`}></span>
                </div>
            </Link>

            <Link href={"/messages"} onClick={() => { setCurrentPage("messages") }}>
                <div className="nav-btn">
                    {messages ? <ActiveMessage className="nav-btn-icn" /> : <Msg className="nav-btn-icn" />}
                    <p>Messaging</p>
                    <span className={`nav-target-icn ${messages && "nav-active"}`}></span>
                </div>
            </Link>

            <Link href={"/notifications"} onClick={() => { setCurrentPage("notifications") }}>
                <div className="nav-btn">
                    <Notif className={`"nav-btn-icn" ${notifications && "active-notifs"}`} />
                    <p>Notifications</p>
                    <span className={`nav-target-icn ${notifications && "nav-active"}`}></span>
                </div>
            </Link>

            <div className="nav-btn" style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}>
                <Image src={myDp} alt="" className="nav-btn-icn" />
                <p>Me</p>
                <span className={`nav-target-icn `}></span>
            </div>

            <div className="nav-btn">
                <Dots className="nav-btn-icn" />
                <p>Work</p>
                <span className={`nav-target-icn `}></span>
            </div>



            <div className="prem-txt">
                <p>Try Premium for free</p>
            </div>
        </div>
    )
}

export default MainButtons