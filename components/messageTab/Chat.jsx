import React from 'react'

function Chat({ info }) {
    return (
        <div className='chat-container'>
            <img src={info.dpURL} alt="" className='chat-dp' />
            <div className='chat-texts'>
                <p>{info.name}</p>
                <p>{info.name}: Lorem ipsum dolor sit amet, consect adipiscing elit.</p>
            </div>
        </div>
    )
}

export default Chat 