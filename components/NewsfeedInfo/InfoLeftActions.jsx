import "./newsfeedInfo.css"
import Image from "next/image"
import dp from "../../public/images/dp.jpg"
import Link from "next/link"


function InfoLeftActions() {
    return (
        <div className="left-info">
            <Link href={"/profile"} >
                <Image src={dp} className="newsfeed-dp" />


            </Link>
            <p>Nathan Flores</p>
        </div>
    )
}

export default InfoLeftActions