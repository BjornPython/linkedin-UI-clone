import ChatHeader from "./ChatHeader"


function UserChat({ styles }) {
    return (
        <div className={styles.userChatContainer}>
            <ChatHeader styles={styles} />
        </div>
    )
}

export default UserChat