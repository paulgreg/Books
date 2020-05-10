import React, { useState, useEffect } from 'react'
import './App.css'
import BookList from './components/BookList'
import { getBookList, getBookFromId } from './services/bookService'
import Book from './components/Book'
import Header from './components/Header'
import HeaderMinified from './components/HeaderMinified'
import Footer from './components/Footer'
import { getParamFromUrl, pushBookUrl } from './services/url'

function App() {
    const [currentBook, setCurrentBook] = useState()

    const [bookList, setBookList] = useState([])

    useEffect(() => {
        getBookList().then((books) => {
            setBookList(books)
            const book = getBookFromId(books, getParamFromUrl('book'))
            if (book) setCurrentBook(book)
        })
    }, [])

    const onBookClick = (book) => {
        setCurrentBook(book)
        pushBookUrl(book)
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
