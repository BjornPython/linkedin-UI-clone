import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"
import ChatMessageInput from "./ChatMessageInput"
import ChatActions from "./ChatActions"
import styles from "../../app/messages/page.module.css"


function UserChat() {
    return (
        <div className={styles.userChatContainer}>
            <ChatHeader />
            <ChatMessages />
            <ChatMessageInput />
            <ChatActions />
        </div>
    )
}

export default UserChat