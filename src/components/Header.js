import React from 'react'
import logo from './logo.svg'
import './Header.css'

export default function Header() {
    return (
        <header className="Header">
            <img
                src={logo}
                className="Header-Logo"
                alt="Livre"
                width="64"
                height="64"
            />
            <h1>Livres</h1>
        </header>
    )
}
