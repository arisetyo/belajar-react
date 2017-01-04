import React, {Component} from 'react'

class RandomNumber extends Component {
	constructor() {
		super()
		this.state = {num: 0}
	}

	handleClick() {
		this.setState({num: Math.random()})
	}

	render() {
		return(
			<div>
				<button onClick={this.handleClick.bind(this)}>Random</button>&nbsp;{this.state.num}
			</div>
		)
	}
}

export default RandomNumber