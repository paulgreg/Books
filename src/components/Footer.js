import React from 'react'
import './Footer.css'
import { withTranslation } from 'react-i18next'

function Footer({ t }) {
    return (
        <footer className="Footer">
            <details>
                <summary>
                    <h4 className="Footer-Title">{t('Footer.title')}</h4>
                </summary>
                <ul className="Footer-List">
                    <li>
                        {t('Footer.icons')}
                        {t('by')}
                        <a href="http://ikons.piotrkwiatkowski.co.uk/">
                            Piotr Adam Kwiatkowski
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/paulgreg/Books">
                            {t('Footer.codeOnGithub')}
                        </a>
                        {t('by')}
                        <a href="https://paulgreg.me/">paulgreg</a>
                    </li>
                </ul>
            </details>
        </footer>
    )
}

export default withTranslation()(Footer)
