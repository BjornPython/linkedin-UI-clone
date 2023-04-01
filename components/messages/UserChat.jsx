import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"
import ChatMessageInput from "./ChatMessageInput"
import ChatActions from "./ChatActions"
function UserChat({ styles }) {
    return (
        <div className={styles.userChatContainer}>
            <ChatHeader styles={styles} />
            <ChatMessages styles={styles} />
            <ChatMessageInput styles={styles} />
            <ChatActions styles={styles} />
        </div>
    )
}

export default UserChat