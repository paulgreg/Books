import React, { useState } from 'react'
import './Chapter.css'
import { getChapter } from '../services/bookService'
import ReactMarkdown from 'react-markdown'

export default function Chapter({ bookId, idx, title }) {
    const [content, setContent] = useState()

    const fetchContent = () => {
        if (!content) {
            getChapter(bookId, idx).then((data) => setContent(data))
        }
    }
    return (
        <article className="Chapter">
            <details>
                <summary onClick={fetchContent} className="Chapter-Summary">
                    <h2 className="Chapter-Title">
                        Chapitre {idx + 1} : {title}
                    </h2>
                </summary>
                <div className="Chapter-Content">
                    <ReactMarkdown source={content} />
                </div>
            </details>
        </article>
    )
}
