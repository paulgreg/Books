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
                    <li key={id} className="BookList-Book">
                        {donation && (
                            <a
                                href={donation}
                                title="Faire un don via paypal"
                                className="BookList-Donation"
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
                        <a href="/" className="BookList-Link" onClick={onClick}>
                            <strong className="BookList-Title">{title}</strong>
                            par
                            <em className="BookList-Author">{author}</em>
                            <small className="BookList-Year">{year}</small>
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
