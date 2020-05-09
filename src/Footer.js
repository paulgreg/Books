import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="Footer">
            <details>
                <summary>
                    <h4 className="Footer-Subtitle">Attributions</h4>
                </summary>
                <ul className="Footer-List">
                    <li>
                        Icônes par{' '}
                        <a href="http://ikons.piotrkwiatkowski.co.uk/">
                            Piotr Adam Kwiatkowski
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/paulgreg/Books">
                            Code on github
                        </a>{' '}
                        by <a href="https://paulgreg.me/">paulgreg</a>
                    </li>
                </ul>
            </details>
        </footer>
    )
}
