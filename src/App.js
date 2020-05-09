import React, { useState, useEffect } from 'react'
import './App.css'
import BookList from './BookList'
import { getBookList } from './bookService'
import Book from './Book'
import Header from './Header'
import HeaderMinified from './HeaderMinified'
import Footer from './Footer'

function App() {
    const [currentBook, setCurrentBook] = useState()

    const [bookList, setBookList] = useState([])

    useEffect(() => {
        getBookList().then((books) => setBookList(books))
    }, [])

    const onBookClick = (book) => {
        setCurrentBook(book)
        const { id, title } = book
        window.history.pushState({}, title, `?book=${id}`)
    }

    const onBackClick = () => {
        setCurrentBook(undefined)
        window.history.pushState({}, 'Livres', './')
    }

    return (
        <div className="App">
            {!currentBook && (
                <>
                    <Header />
                    <BookList bookList={bookList} onBookClick={onBookClick} />
                    <Footer />
                </>
            )}

            {currentBook && (
                <>
                    <HeaderMinified
                        title={currentBook.title}
                        onBackClick={onBackClick}
                    />
                    <Book book={currentBook} />
                </>
            )}
        </div>
    )
}

export default App
