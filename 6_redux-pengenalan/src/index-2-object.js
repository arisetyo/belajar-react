/*
 * Basic example of Redux usage:
 * - object as state
 * - three types of actions
 */
import { createStore } from 'redux'

//ACTION CREATORS
const addAge = {type: 'BIRTHDAY'}
const changeName = name => ({type: 'CHANGE_NAME', name})
const changeSchool = school => ({type: 'CHANGE_SCHOOL', school})

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
store.dispatch(changeName('debay'))
store.dispatch(addAge)
store.dispatch(addAge)
store.dispatch(addAge)
store.dispatch(addAge)
store.dispatch(addAge)
store.dispatch(changeName('dakleutik'))
store.dispatch(addAge)
store.dispatch(changeSchool('TK'))
store.dispatch(addAge)
store.dispatch(changeSchool('SD'))
store.dispatch(addAge)
store.dispatch(addAge)
store.dispatch(addAge)
store.dispatch(addAge)
store.dispatch(addAge)
store.dispatch(changeSchool('SMP'))
store.dispatch(addAge)
store.dispatch(changeName('abege'))
store.dispatch(addAge)
store.dispatch(addAge)
store.dispatch(changeSchool('SMA'))
store.dispatch(addAge)
store.dispatch(addAge)
store.dispatch(changeName('ahzg'))
store.dispatch(addAge)
store.dispatch(changeSchool('Kul'))
store.dispatch(addAge)
store.dispatch(addAge)
store.dispatch(addAge)
store.dispatch(changeName('ntap'))