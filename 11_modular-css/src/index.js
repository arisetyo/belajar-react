import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App />, document.getElementById('root'))

/*
Kita menggunakan HMR agar perubahan style pada CSS dapat dilihat langsung tanpa harus melakukan transpilasi ulang dan/atau reload peramban.

Bacaan tambahan https://css-tricks.com/css-modules-part-1-need/
*/