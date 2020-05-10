import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './i18n'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.register()
