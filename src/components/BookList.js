import React from 'react'
import './BookList.css'
import paypal from './paypal.svg'

export default function BookList({ bookList, onBookClick }) {
    return (
        <ul className="BookList-BookList">
            {bookList.map((book) => {
                const { id, title, author, year, donation } = book

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
                            {donation && (
                                <a
                                    href={donation}
                                    title="Faire un don via paypal"
                                    className="BookList-Donation"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={paypal}
                                        className="BookList-Paypal"
                                        width="32"
                                        height="32"
                                        alt="paypal"
                                    />
                                </a>
                            )}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
