/*
 * Very basic use of Redux:
 * - integer as state
 * - two types of actions
 */
import { createStore } from 'redux'

//ACTION CREATORS
const inc = {type: 'INCREMENT'}
const dec = {type: 'DECREMENT'}

//REDUCER (FUNCTION)
function counter(state = 0, action) {

	switch (action.type) {

		case 'INCREMENT':
			return state + 1
		
		case 'DECREMENT':
			return state - 1
		
		default:
			return state
	}

}
//REDUCER (INITIALIZATION)
let store = createStore(counter)

/* - - - - - - - - - - - - - - - - - - TESTING - - - - - - - - - - - - - - - - - - */
store.subscribe(() =>
	document.write(`current state: ${store.getState()}<br/>`)
)

//DISPATCH EXAMPLES
store.dispatch(inc)
store.dispatch(inc)
store.dispatch(dec)
store.dispatch(dec)
store.dispatch(dec)
store.dispatch(dec)
store.dispatch(inc)
store.dispatch(inc)