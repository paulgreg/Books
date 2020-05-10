import React from 'react'
import './HeaderMinified.css'
import backIcon from './arrow_left.svg'
import { withTranslation } from 'react-i18next'

function HeaderMinified({ t, title: bookTitle, onBackClick }) {
    return (
        <header className="Header-Minified">
            <a
                href="/"
                title={t('HeaderMinified.link.text')}
                className="Header-Back"
                onClick={(e) => {
                    e.preventDefault()
                    onBackClick && onBackClick()
                }}
            >
                <img
                    src={backIcon}
                    alt={t('HeaderMinified.icon.lat')}
                    width="20"
                    height="20"
                />
            </a>
            <h1 className="Header-Book-Title">{bookTitle}</h1>
        </header>
    )
}

export default withTranslation()(HeaderMinified)
