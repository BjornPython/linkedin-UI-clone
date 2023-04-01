import React from 'react'
import "../NewsfeedInfo/newsfeedInfo.css"
import Image from 'next/image'
import ad from "../../public/images/ad.png"
function MessageAd() {
    return (
        <>
            <Image src={ad} className='ad-image' />
            <div className="site-infos">
                <div className="block">
                    <p>About</p>
                    <p>Accesibility</p>
                    <p>Help Center</p>
                </div>
                <div className="block">
                    <p>Privacy & Terms</p>
                    <p>Ad Choices</p>
                </div>
                <div className="block">
                    <p>Advertising</p>
                    <p>Business Services</p>
                </div>
                <div className="block">
                    <p>Get the Linkedin App</p>
                    <p>More</p>
                </div>
            </div>

        </>

    )
}

export default MessageAd