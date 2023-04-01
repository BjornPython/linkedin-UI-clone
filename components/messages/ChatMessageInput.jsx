import Down from "../../public/svgs/down.svg"

function ChatMessageInput({ styles }) {
    return (
        <div className={styles.chatMessageInputContainer}>
            <textarea type="text" placeHolder="Write a message..." />
            <div className={styles.msgArrowIcn}>
                <Down />
            </div>

        </div>
    )
}

export default ChatMessageInput