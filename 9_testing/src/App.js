/*
 * Basic example of Redux Thunk
 */

import React, { Component } from 'react'

import ComponentHeader from './componentHeader'
import ComponentInput from './componentInput'
import utils from './utils'

class App extends Component {
	render() {
		const data = [{val: 'A'}, {val: 'B'}, {val: 'C'}]

		let inputs = data.map((i, idx) => {
			return (
				<ComponentInput key={idx} value={i.val}/>
			)
		})

		return (
			<div>
				<ComponentHeader text={'Hello'}/>
				{inputs}
				<div>
					<p>2 + 2 = {utils.penjumlahan(2, 2)}</p>
					<p>2 * 4 = {utils.perkalian(2, 4)}</p>
				</div>
			</div>
		)
	}
}

export default App