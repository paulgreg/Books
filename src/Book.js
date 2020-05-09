import React from 'react'

export default function Book({ book }) {
    const { chapters } = book
    return (
        <>
            <ul>
                {chapters.map((title) => (
                    <li>{title}</li>
                ))}
            </ul>
        </>
    )
}
