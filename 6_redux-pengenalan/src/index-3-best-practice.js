/*
 * Using Redux best parctices
 * - constant as action types
 * - using functions as action creators
 * - separate action creators in different file
 */
import { createStore } from 'redux'
//write an action creator in a separate file
import { addAge, changeName, changeSchool } from './actionCreators'

const defaultState = {
	name: null,
	age: 0,
	school: []
}

//REDUCER (FUNCTION)
function counter(state = defaultState, action) {
	
	switch (action.type) {

		case 'BIRTHDAY':
			return Object.assign({}, state, {age: state.age + 1}) //State object must not be mutated > http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html

		case 'CHANGE_NAME':
			return Object.assign({}, state, {name: action.name})

		case 'CHANGE_SCHOOL':
			return Object.assign({}, state, {school: [...state.school, action.school]}) //Array in state object must not be mutated

		default:
			return state
	}

}
//REDUCER (INITIALIZATION)
let store = createStore(counter)

/* - - - - - - - - - - - - - - - - - - TESTING - - - - - - - - - - - - - - - - - - */
store.subscribe(() =>
	document.write(`current state, age: ${store.getState().age}, name: ${store.getState().name}, school: ${store.getState().school.join(', ')}<br/>`)
)

//DISPATCH EXAMPLES
store.dispatch(changeName('baby'))
store.dispatch(addAge())
store.dispatch(addAge())
store.dispatch(addAge())
store.dispatch(addAge())
store.dispatch(addAge())
store.dispatch(changeName('toddler'))
store.dispatch(addAge())
store.dispatch(changeSchool('TK'))
store.dispatch(addAge())
store.dispatch(changeSchool('SD'))
store.dispatch(changeName('preteen'))
store.dispatch(addAge())
store.dispatch(addAge())
store.dispatch(addAge())
store.dispatch(addAge())
store.dispatch(changeName('teens'))
store.dispatch(addAge())
store.dispatch(changeSchool('SMP'))
store.dispatch(addAge())
store.dispatch(addAge())
store.dispatch(addAge())
store.dispatch(changeSchool('SMA'))
store.dispatch(addAge())
store.dispatch(addAge())
store.dispatch(addAge())
store.dispatch(changeSchool('Kulia'))
store.dispatch(addAge())
store.dispatch(addAge())
store.dispatch(addAge())
store.dispatch(changeName('young adult'))
