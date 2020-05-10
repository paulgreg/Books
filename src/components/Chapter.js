import React from 'react'
import './Chapter.css'

export default function Chapter({ bookId, idx, title }) {
    return (
        <article className="Chapter">
            <details>
                <summary>
                    <h2 className="Chapter-Title">
                        Chapitre {idx + 1} : {title}
                    </h2>
                </summary>
                <div className="Chapter-Content"></div>
            </details>
        </article>
    )
}
