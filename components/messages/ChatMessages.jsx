import Image from "next/image"
import sampleChatDp from "../../public/images/user2.jpg"
import myDp from "../../public/images/dp.jpg"
import styles from "../../app/messages/page.module.css"


const sampleConvo = [
    {
        sender: "Maximo Guzman",
        message: "Hi Nathan, I stumbled upon your LinkedIn profile and I must say I'm very impressed by your skills and projects. You seem to have a great understanding of software development.",
        dp: sampleChatDp
    },
    {
        sender: "Nathan Flores",
        message: "Thank you, Maximo. I'm always open to new opportunities!",
        dp: myDp
    },
    {
        sender: "Maximo Guzman",
        message: "That's great to hear, Nathan. In my experience, being disciplined, coachable, and passionate about the industry are some of the most important traits for a developer. Would you agree?",
        dp: sampleChatDp
    },
    {
        sender: "Nathan Flores",
        message: "Absolutely. I think discipline is important because it helps you stay focused and meet deadlines, while being coachable allows you to learn from your mistakes and continuously improve. And of course, being passionate about the industry helps you stay motivated and engaged in your work.",
        dp: myDp
    },
    {
        sender: "Maximo Guzman",
        message: "Well said, Nathan. You seem to embody all of those traits, which is why I think you would be a valuable member of a company. Have you ever considered working for a different company?",
        dp: sampleChatDp
    },
    {
        sender: "Nathan Flores",
        message: "I'm always open to new opportunities!",
        dp: myDp
    }
];




const displayMessage = (info) => {
    const { sender, message, dp } = info
    return (
        <div className={styles.chatMessage}>
            <div className={styles.imageName}>
                <Image src={dp} alt="" className={styles.chatMessageDp} />
                <p>{sender}</p>
            </div>
            <div className={styles.messageText}>
                <p>{message}</p>
            </div>
        </div>

    )
}



function ChatMessages() {
    return (
        <div className={styles.chatMessages}>
            <div className={styles.displayChatUser}>
                <Image src={sampleChatDp} className={styles.chatDpSample} alt="" />
                <div className={styles.chatUserInfo}>
                    <p>Maximo Guzman</p>
                    <p>Senior Data Scientist at a Tech Startup</p>
                </div>


            </div>

            <div className={styles.allMessageContents}>
                <div className={styles.borderTop}>
                    <hr />
                    <p>MONDAY</p>
                    <hr />
                </div>

                {sampleConvo.map(message => {
                    return displayMessage(message)
                })}

            </div>

        </div>
    )
}

export default ChatMessages