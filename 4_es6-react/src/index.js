import React, {Component} from 'react'
import {render} from 'react-dom'

import SimpleComponent from './SimpleComponent'
import FunctionalComponent from './FunctionalComponent'

class App extends Component {
	render () {
		return (
			<div>
				<p>Menggunakan Webpack &amp; Babel untuk membuat komponen React dengan ES6.</p>
				<SimpleComponent/>
				
				<FunctionalComponent msg={'Komponen fungsional (non class)'} arr={[1, 2, 3]}/>
			</div>
		)
	}
}

render(<App/>, document.getElementById('app'))