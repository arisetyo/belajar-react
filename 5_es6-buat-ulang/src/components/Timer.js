import React, {Component} from 'react';

class Timer extends Component {
	constructor() {
		super();
		this.state = {secElapsed: 0, isPaused: false};
	}

	componentDidMount() {
		this.interval = setInterval(this.tick.bind(this), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	tick() {
		this.setState({secElapsed: this.state.secElapsed + 1});
	}

	pause() {
		if(this.state.isPaused)
			this.interval = setInterval(this.tick.bind(this), 1000);
		else
			clearInterval(this.interval);
		
		this.setState({isPaused: !this.state.isPaused})
	}

	render() {
		return (
			<div>
				<p>Detik terlewati: {this.state.secElapsed}</p>
				<button onClick={this.pause.bind(this)}>Pause</button>
			</div>
		);
	}
}

export default Timer;