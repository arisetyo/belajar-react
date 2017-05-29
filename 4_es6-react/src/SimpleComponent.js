import React, {Component} from 'react'

class SimpleComponent extends Component {
	constructor() {
		super()
		this.state = {message: ''}
	}
	handleClick() {
		this.setState({message: 'MANTAP'})
	}
	render () {
		return (
			<div>
				<button onClick={this.handleClick.bind(this)}>Tekan</button>
				<h1>{this.state.message}</h1>
			</div>
		)
	}
}

export default SimpleComponent;