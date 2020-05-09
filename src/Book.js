import React from 'react'
import Chapter from './Chapter'

export default function Book({ book }) {
    const { id, chapters } = book
    return (
        <main>
            {chapters.map((title, idx) => (
                <Chapter key={idx} bookId={id} idx={idx} title={title} />
            ))}
        </main>
    )
}
