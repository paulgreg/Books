import React from 'react'
import './HeaderMinified.css'
import backIcon from './arrow_left.svg'

export default function HeaderMinified({ title, onBackClick }) {
    return (
        <header className="Header-Minified">
            <a
                href="/"
                title="Retour à la liste des livres"
                className="Header-Back"
                onClick={(e) => {
                    e.preventDefault()
                    onBackClick && onBackClick()
                }}
            >
                <img src={backIcon} alt="Retour" width="20" height="20" />
            </a>
            <h1 className="Header-Book-Title">{title}</h1>
        </header>
    )
}
