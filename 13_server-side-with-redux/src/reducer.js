import {createStore} from 'redux'

const todoReducer = (state = 77, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1
		default:
			return state
	}
}

export {todoReducer}