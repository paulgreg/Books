import React from 'react'
import './BookList.css'
import iconPaypal from './paypal.svg'
import iconDownload from './document_download.svg'

export default function BookList({ bookList, onBookClick }) {
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
                                par
                                <em className="BookList-Author">{author}</em>
                                {' - '}
                                <small className="BookList-Year">{year}</small>
                            </a>
                            {epub && (
                                <a
                                    href={epub}
                                    title="télécharger le fichier epub"
                                    className="BookList-Action"
                                >
                                    <img
                                        src={iconDownload}
                                        className="BookList-Icon"
                                        width="24"
                                        height="24"
                                        alt="download"
                                    />
                                    télécharger en epub
                                </a>
                            )}
                            {donation && (
                                <a
                                    href={donation}
                                    title="Faire un don via paypal"
                                    className="BookList-Action"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={iconPaypal}
                                        className="BookList-Icon"
                                        width="24"
                                        height="24"
                                        alt="paypal"
                                    />
                                    faire un don
                                </a>
                            )}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
