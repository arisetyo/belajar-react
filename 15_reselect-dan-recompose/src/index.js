import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './store/reducer'
import App from './components/App'

/**
 * Semua komponen yang digunakan di aplikasi ini dibuat menggunakan Functional Component (non-class)
 */
render(<Provider store={store}><App/></Provider>, document.getElementById('root'))