import React from 'react'
import logo from './logo.svg'
import './Header.css'
import { withTranslation } from 'react-i18next'

function Header({ t }) {
    return (
        <header className="Header">
            <img
                src={logo}
                className="Header-Logo"
                alt={t('Header.logo.alt')}
                width="64"
                height="64"
            />
            <h1>{t('Header.title')}</h1>
        </header>
    )
}
export default withTranslation()(Header)
