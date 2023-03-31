import Search from "../../public/svgs/search.svg"
import Adjust from "../../public/svgs/adjust.svg"
function MessageSearch() {
    return (
        <div className="msg-search-container">
            <div className="search-container-2">
                <Search className="msg-search-icn" />
                <input type="text" className="msg-search-input" />
                <Adjust className="msg-adjust-icn" />
            </div>
        </div>
    )
}

export default MessageSearch