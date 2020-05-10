import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LangageSwitcher({ className }) {
    const { i18n } = useTranslation()
    const changeLanguage = (lng) => i18n.changeLanguage(lng)
    return (
        <div className={className}>
            <button onClick={() => changeLanguage('fr')}>fr</button>
            <button onClick={() => changeLanguage('en')}>en</button>
        </div>
    )
}
