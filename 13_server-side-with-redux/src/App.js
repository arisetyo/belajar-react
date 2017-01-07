import React from 'react'
import {connect} from 'react-redux'

const App = props => (
	<div>
		<button onClick={() => props.increment()}>+</button>
		<h1>{props.data}</h1>
	</div>
)

//CONNECT REDUX TO REACT
const ConnectedApp = connect(
	state => ({
		data: state
	}),
	dispatch => ({
		increment: () => {dispatch({type:'INCREMENT'})}
	})
)(App)

export default ConnectedApp