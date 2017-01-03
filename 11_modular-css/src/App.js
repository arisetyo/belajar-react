/*
 * Basic of Modular CSS
 */

import React, { Component } from 'react'

import styles from './App.css'
import ComponentSample from './ComponentSample'

class App extends Component {
	constructor() {
		super()
		this.state = {open: false}
		this.openWrapper = this.openWrapper.bind(this)
	}

	openWrapper() {
		this.setState({open: !this.state.open})
	}

	render() {
		return (
			<div className={styles.container}>
				
				<h1 className={styles.header}>Modular CSS is <em>Cool</em></h1>
				
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <span className={'redFont'}>et dolore magna aliqua</span>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;
					<button onClick={this.openWrapper}>{this.state.open ? 'HIDE' : 'SHOW'}</button>
				</p>

				<div className={`${styles.wrapper} ${this.state.open ? '' : styles.hidden}`}>
					<ComponentSample name={'A M P'}/>
				</div>

			</div>
		)
	}
}

export default App