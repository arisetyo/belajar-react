import React, {Component} from 'react'
import {render} from 'react-dom'

import Counter from './components/Counter'
import Timer from './components/Timer'
import ColorDisplay from './components/ColorDisplay'

class App extends Component {
	render () {
		return (
			<div>
				<p>Membuat ulang komponen-komponen di bagian Pengenalan dan Lanjutan menggunakan ES6.</p>
				
				<h3>Counter</h3>
				<Counter/>
				
				<h3>Timer</h3>
				<Timer/>
				
				<h3>ColorDisplay</h3>
				<ColorDisplay/>
			</div>
		)
	}
}

render(<App/>, document.getElementById('app'))