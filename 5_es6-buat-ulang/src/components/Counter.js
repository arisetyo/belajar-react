import React, {Component} from 'react';

class Counter extends Component {
	constructor() {
		super()
		this.state = {count: 0}
	}

	handleClick() {
		this.setState({count: this.state.count + 1});
	}

	render() {
		return (
			<div className='dashedBox'>
				<button onClick={this.handleClick.bind(this)}>+ 1</button>
				<h1>{this.state.count}</h1>
			</div>
		);
	}
}
export default Counter;