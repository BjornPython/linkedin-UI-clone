import React, { useState, useEffect } from 'react'
import "../newsfeedInfo.css"
import Image from 'next/image'
import ad from "../../../public/images/ad.png"
function Advertisement({ scrollVal }) {

    const [isFixed, setIsFixed] = useState(false)


    useEffect(() => {
        if (scrollVal >= 340 && !isFixed) {
            setIsFixed(true)
        }

        else if (scrollVal <= 340 && isFixed) {
            setIsFixed(false)
        }

    }, [scrollVal])


    return (
        <div className={`ad-container ${isFixed && "ad-container-fixed"}`}>
            <Image src={ad} alt="" className='ad-img' />
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
        </div >
    )
}

export default Advertisement