import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import ConnectedApp from './App'
import {todoReducer} from './reducer'

// Grab the state from a global variable injected into the server-generated HTML
const initialState = window.__REDUX_STATE__212
// Create Redux store with initial state
const store = createStore(todoReducer, initialState)

render(
	<Provider store={store}>
		<ConnectedApp/>
	</Provider>,
	document.getElementById('root')
)