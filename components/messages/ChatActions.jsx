import Image from "../../public/svgs/image.svg"
import Gif from "../../public/svgs/gif.svg"
import Clip from "../../public/svgs/clip.svg"
import Emoji from "../../public/svgs/emoji.svg"
import Dots from "../../public/svgs/dotss.svg"

function ChatActions({ styles }) {
    return (
        <div className={styles.chatActions}>
            <div className={styles.chatActionIcns}>
                <div className={styles.chatHeaderIcn}>
                    <Image />
                </div>
                <div className={styles.chatHeaderIcn}>
                    <Gif />
                </div>
                <div className={styles.chatHeaderIcn}>
                    <Clip />
                </div>
                <div className={styles.chatHeaderIcn}>
                    <Emoji />
                </div>
            </div>

            <div className={styles.chatActionIcns}>
                <button>Send</button>
                <div className={styles.chatHeaderIcn}>
                    <Dots className={styles.chatActionDots} />
                </div>
            </div>
        </div>
    )
}

export default ChatActions