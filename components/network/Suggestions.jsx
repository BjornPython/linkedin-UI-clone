import React from 'react'
import Suggestion from './Suggestion'

const getUsers = async () => {
    try {
        const res = await fetch("http://localhost:8000/users", { cache: "no-cache" })
        const data = await res.json()
        return data
    } catch (err) { throw err }
}

async function Suggestions({ styles }) {

    const userSuggestions = await getUsers()

    return (
        <div className={styles.suggestionsContainer}>
            <p style={{ cursor: "pointer", margin: "20px 0 20px 20px" }}>Suggestions</p>
            <div className={styles.allSuggestions} >

                {Object.keys(userSuggestions).length > 0 &&

                    Object.keys(userSuggestions).map(userId => {
                        return <Suggestion key={userId} userInfo={userSuggestions[userId]} styles={styles} />
                    })}


            </div>
        </div>
    )
}

export default Suggestions