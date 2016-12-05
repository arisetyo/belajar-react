import React, {Component} from 'react'
import {render} from 'react-dom'

import SimpleComponent from './SimpleComponent'

class App extends Component {
	render () {
		return (
			<div>
				<p>Menggunakan Webpack &amp; Babel untuk membuat komponen React dengan ES6.</p>
				<SimpleComponent/>
				<SimpleComponent/>
				<SimpleComponent/>
			</div>
		)
	}
}

render(<App/>, document.getElementById('app'))