import { homepage } from '../../package.json'

const basePath = homepage || '.'

let cachedConfig

export const getBookList = () => {
    if (cachedConfig) return Promise.resolve(cachedConfig.books)
    return fetch(`${basePath}/data/config.json`)
        .then((response) => response.json())
        .then((data) => {
            cachedConfig = data
            return cachedConfig.books
        })
}

export const getBookFromId = (books, bookId) =>
    books.find(({ id }) => id === bookId)

export function getChapter(bookId, chapterIdx) {
    return fetch(
        `${basePath}/data/books/${bookId}/chapter-${chapterIdx + 1}.md`
    )
        .then((response) => response.text())
        .catch((e) => e)
}
