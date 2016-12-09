import React, {Component} from 'react'
import {render} from 'react-dom'

import Counter from './components/Counter'
import Timer from './components/Timer'
import ColorDisplay from './components/ColorDisplay'
import Tabular from './components/Tabular'
import Dropdown from './components/Dropdown'
import ColorPicker from './components/ColorPicker'
import SVGContainer from './components/SVGContainer'

class App extends Component {
	render () {
		return (
			<div>
				<p>Membuat ulang komponen-komponen di bagian Pengenalan dan Lanjutan menggunakan ES6.</p>
				
				<div className='componentContainer'>
					<div className='component'>
						<h3>Counter</h3>
						<Counter/>
					</div>
					<div className='component'>
						<h3>Timer</h3>
						<Timer/>
					</div>
					<div className='component'>
						<h3>ColorDisplay</h3>
						<ColorDisplay/>
					</div>
				</div>

				<div className='componentContainer'>
					<div className='component'>
						<h3>Tabular</h3>
						<Tabular/>
					</div>
					<div className='component'>
						<h3>Dropdown</h3>
						<Dropdown/>
					</div>
				</div>

				<div className='largeComponent'>
					<h3>ColorPicker</h3>
					<ColorPicker/>
				</div>

				<h3>SVG Control</h3>
				<SVGContainer/>
					
			</div>
		)
	}
}

render(<App/>, document.getElementById('app'))
