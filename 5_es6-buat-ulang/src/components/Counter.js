import React, {Component} from 'react';

class Counter extends Component {
	constructor() {
		super()
		this.state = {count: 0}
	}

	handleClick() {
		this.setState({count: this.state.count + 1});
	}

	reset() {
		this.setState({count: 0});
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick.bind(this)}>+ 1</button>
				<button onClick={this.reset.bind(this)}>RESET</button>
				<h1>{this.state.count}</h1>
			</div>
		);
	}
}
export default Counter;