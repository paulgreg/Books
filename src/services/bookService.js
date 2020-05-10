let cachedConfig

export function getBookList() {
    if (cachedConfig) return Promise.resolve(cachedConfig.books)
    return fetch('./data/config.json')
        .then((response) => response.json())
        .then((data) => {
            cachedConfig = data
            return cachedConfig.books
        })
}
