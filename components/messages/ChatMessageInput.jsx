import Down from "../../public/svgs/down.svg"
import styles from "../../app/messages/page.module.css"

function ChatMessageInput() {
    return (
        <div className={styles.chatMessageInputContainer}>
            <textarea type="text" placeholder="Write a message..." />
            <div className={styles.msgArrowIcn}>
                <Down />
            </div>

        </div>
    )
}

export default ChatMessageInput