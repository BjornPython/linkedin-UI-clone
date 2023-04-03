import React from 'react'
import Suggestion from './Suggestion'
import styles from "../../app/network/page.module.css"

const getUsers = async () => {
    try {
        const res = await fetch(`${process.env.API_ENDPOINT}/users`, { cache: "no-cache" })
        const data = await res.json()
        return data
    } catch (err) { throw err }
}

async function Suggestions() {

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