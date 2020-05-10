import React from 'react'
import './BookList.css'
import iconPaypal from './paypal.svg'
import iconDownload from './document_download.svg'
import { withTranslation } from 'react-i18next'

function BookList({ t, bookList, onBookClick }) {
    return (
        <ul className="BookList-BookList">
            {bookList.map((book) => {
                const { id, title, author, year, donation, epub } = book

                const onClick = (e) => {
                    e.preventDefault()
                    onBookClick && onBookClick(book)
                }
                return (
                    <li key={id}>
                        <div className="BookList-Book">
                            <a
                                href="/"
                                className="BookList-Link"
                                onClick={onClick}
                            >
                                <strong className="BookList-Title">
                                    {title}
                                </strong>
                                {t('by')}
                                <em className="BookList-Author">{author}</em>
                                {' - '}
                                <small className="BookList-Year">{year}</small>
                            </a>
                            {epub && (
                                <a
                                    href={epub}
                                    title={t('BookList.epub.link.text')}
                                    className="BookList-Action"
                                >
                                    <img
                                        src={iconDownload}
                                        className="BookList-Icon"
                                        width="24"
                                        height="24"
                                        alt={t('BookList.epub.icon.alt')}
                                    />
                                    {t('BookList.epub.link.text')}
                                </a>
                            )}
                            {donation && (
                                <a
                                    href={donation}
                                    title={t('BookList.donate.link.text')}
                                    className="BookList-Action"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={iconPaypal}
                                        className="BookList-Icon"
                                        width="24"
                                        height="24"
                                        alt={t('BookList.donate.icon.alt')}
                                    />
                                    {t('BookList.donate.link.text')}
                                </a>
                            )}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default withTranslation()(BookList)
