import { createStore } from 'redux'

/*
this reducer's state is an array
*/
//REDUCER
const todoReducer = (state = [], action) => {
	
	switch (action.type) {
		
		case 'ADD_TODO':
			let newTodo = {id: state.length, text: action.text, completed: false}
			return [...state, newTodo]

		case 'FINISH_TODO':
			return state.map((todo, index) => {
				if (index === action.index) return Object.assign({}, todo, {completed: true})
				return todo
			})

		default:
			return state
	}
}
export let store = createStore(todoReducer)