import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo, finishTodo } from './actions'
import { store } from './reducer'

//VIEW
class App extends Component {
	addTodo() {
		store.dispatch(addTodo())
	}

	finished(id) {
		store.dispatch(finishTodo(id))
	}

	render() {
		let todos = this.props.data.map( (item, index) => (
			<div key={index} className={'todos'}>
				<span onClick={() => this.finished(item.id)} className={item.completed ? 'striked' : ''}>
					{item.text}
				</span>
			</div>
		))

		return (
			<div className={'dashedBox'}>
				<button onClick={this.addTodo}>+ Add Todo</button>
				<div>{todos}</div>
			</div>
		);
	}
}

//CONNECT REDUX TO REACT
const mapStateToProps = state => {
	return {data: state}
}
export const ConnectedApp = connect(mapStateToProps)(App);