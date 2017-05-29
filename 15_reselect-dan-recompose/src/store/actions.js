/**
 * Actions
 */

const ADD_TASK = 'ADD_TASK'
const FINISH_TASK = 'FINISH_TASK'

const addTask = content => ({type: ADD_TASK, content})
const finishTask = id => ({type: FINISH_TASK, id})

export {addTask, finishTask}