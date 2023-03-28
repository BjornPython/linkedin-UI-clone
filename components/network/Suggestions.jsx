import React from 'react'
import Suggestion from './Suggestion'

const getUsers = async () => {
    try {
        console.log("FETCHING");
        const res = await fetch("http://localhost:8000/users", { cache: "no-cache" })
        const data = await res.json()
        console.log("DATA: ", data);
        console.log(data);
        return data
    } catch (err) { throw err }
}

async function Suggestions({ styles }) {

    const userSuggestions = await getUsers()

    return (
        <div className={styles.suggestionsContainer}>
            <p style={{ cursor: "pointer" }}>Suggestions</p>
            <div className={styles.allSuggestions} >

                {Object.keys(userSuggestions).length > 0 &&

                    Object.keys(userSuggestions).map(userId => {
                        return <Suggestion key={userId} userInfo={userSuggestions[userId]} styles={styles} />
                    })}

                {/* <Suggestion styles={styles} />
                <Suggestion styles={styles} />
                <Suggestion styles={styles} />
                <Suggestion styles={styles} />
                <Suggestion styles={styles} />
                <Suggestion styles={styles} /> */}
            </div>
        </div>
    )
}

export default Suggestions