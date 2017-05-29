/**
 * Reducer
 */
import {createStore} from 'redux'

/**
 * Default state.
 * Item di dalam array tasks memiliki struktur {id, content}
 */
const defaultState = {
	tasks: [],
	finishedTasksIds: []
}

/**
 * Reducer functions
 */
const reducer = (state = defaultState, action) => {
	
	switch (action.type) {
		case 'ADD_TASK':
			return {...state, tasks: [...state.tasks, {id: state.tasks.length, content: action.content}]}

		case 'FINISH_TASK':
			return {...state, finishedTasksIds: [...state.finishedTasksIds, action.id]}

		default:
			return state
	}

}

export let store = createStore(reducer)