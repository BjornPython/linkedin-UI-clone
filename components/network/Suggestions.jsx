import React from 'react'
import Suggestion from './Suggestion'


function Suggestions({ styles }) {
    return (
        <div className={styles.suggestionsContainer}>
            <p>Suggestions</p>
            <div className={styles.allSuggestions}>
                <Suggestion styles={styles} />
                <Suggestion styles={styles} />
                <Suggestion styles={styles} />
                <Suggestion styles={styles} />
                <Suggestion styles={styles} />
                <Suggestion styles={styles} />

            </div>
        </div>
    )
}

export default Suggestions