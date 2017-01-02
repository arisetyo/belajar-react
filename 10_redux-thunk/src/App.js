/**
 * Contoh sederhana penggunaan redux-thunk
 */

import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import $ from "jquery"

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//REDUCER
const defaultState = {
	count: 0,
	data: null
}

function counter(state = defaultState, action) {
	switch (action.type) {
		case 'INCREMENT':
			return Object.assign({}, state, {count: state.count + 1})
		case 'STORE_DATA':
			return Object.assign({}, state, {data: action.data})
		default:
			return state
	}
}

const store = createStore(
	counter,
	applyMiddleware(thunk)
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//ACTION CREATORS
const incrementRegular = () => ({type: 'INCREMENT'})
const storeData = data => ({type: 'STORE_DATA', data})

function incrementAsync() {
	console.log('waiting...')
	return dispatch => {
		setTimeout(() => {
			// We can invoke sync or async actions with `dispatch`
			dispatch(incrementRegular())
		}, 1000)
	};
}

function incrementIfOdd() {
	return (dispatch, getState) => {
		const { count } = getState()
		if (count % 2 === 0) return
		dispatch(incrementRegular())
	};
}

function incrementAfterDataLoaded() {
	console.log('loading...')
	return dispatch => {
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/users/1',
			dataType: 'json',
			cache: false,
			success: data => {
				dispatch(incrementRegular())
				dispatch(storeData(data))
			}
		});
	};
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//COMPONENT
class App extends Component {
	handleClickReg() {
		store.dispatch(incrementRegular())
	}
	handleClickAsync1() {
		store.dispatch(incrementAsync())
	}
	handleClickCond() {
		store.dispatch(incrementIfOdd())
	}
	handleClickAsync2() {
		store.dispatch(incrementAfterDataLoaded())
	}
	render() {
		return (
			<div>
				<h1>Hello Thunk</h1>
				
				<div>
					<small>Open console to observe state change</small>
				</div>
				
				<button onClick={this.handleClickReg.bind(this)}>REGULAR INCREMENT</button><br/>
				<button onClick={this.handleClickAsync1.bind(this)}>ASYNC (TIME) INCREMENT</button><br/>
				<button onClick={this.handleClickCond.bind(this)}>CONDITIONAL ('if odd') INCREMENT</button><br/>
				<button onClick={this.handleClickAsync2.bind(this)}>ASYNC (AJAX) INCREMENT</button><br/>
			</div>
		)
	}
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
store.subscribe(() =>
	console.log(store.getState())
)

export default App