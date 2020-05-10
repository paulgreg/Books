import React from 'react'
import Chapter from './Chapter'
import { pushBookAndChapterUrl, getParamFromUrl } from '../services/url'

export default function Book({ book }) {
    const { id, title, chapters } = book
    const onChapterOpened = (idx) => {
        pushBookAndChapterUrl({ id, title, idx })
    }
    const chapterIdxFromUrl = getParamFromUrl('chapter')

    return (
        <main>
            {chapters.map((title, idx) => (
                <Chapter
                    key={idx}
                    bookId={id}
                    idx={idx}
                    title={title}
                    onChapterOpened={onChapterOpened}
                    opened={
                        chapterIdxFromUrl &&
                        parseInt(chapterIdxFromUrl, 10) === idx
                    }
                />
            ))}
        </main>
    )
}
