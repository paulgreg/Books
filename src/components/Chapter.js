import React, { useState } from 'react'
import './Chapter.css'
import { getChapter } from '../services/bookService'
import ReactMarkdown from 'react-markdown'
import { withTranslation } from 'react-i18next'

function Chapter({ t, bookId, idx, opened = false, title, onChapterOpened }) {
    const [content, setContent] = useState()

    const fetchContent = () => {
        if (!content) {
            getChapter(bookId, idx).then((data) => setContent(data))
            onChapterOpened && onChapterOpened(idx)
        }
    }
    if (opened) fetchContent()
    return (
        <article className="Chapter">
            <details open={opened}>
                <summary onClick={fetchContent} className="Chapter-Summary">
                    <h2 className="Chapter-Title">
                        {t('Chapter.title')} {idx + 1} : {title}
                    </h2>
                </summary>
                <div className="Chapter-Content">
                    <ReactMarkdown source={content} />
                </div>
            </details>
        </article>
    )
}

export default withTranslation()(Chapter)
