"use client"

import { useState } from "react"
import Focused from "./Focused"


function MessageContents() {

    const [page, setPage] = useState("focused")

    return (
        <div className="message-contents">
            <div className="message-pages-container" >
                <div className={`msg-page-btn-cter ${page === "focused" && "active-btn"}`}
                    onClick={() => { setPage("focused") }}>
                    <button>Focused </button>
                    <span></span>
                </div>
                <div className={`msg-page-btn-cter ${page === "other" && "active-btn"}`}
                    onClick={() => { setPage("other") }}>
                    <button >Other</button>
                    <span></span>
                </div>
            </div>

            {page === "focused" && <Focused />}


        </div>
    )
}

export default MessageContents