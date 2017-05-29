/**
 * Selectors
 */
import {createSelector} from 'reselect'

/**
 * Ambil data-data dari state Redux
 */
const allTasksSelector = state => state.tasks;
const finishedIdSelector = state => state.finishedTasksIds;

/**
 * Buat sebuah array yang berisi tasks yang sudah selesai
 * berdasarkan state.tasks & state.finishedTasksIds.
 * Parameter terakhir di createSelector() adalah fungsi yang menghasilkan data,
 * parameter-parameter sebelumnya adalah data yang dibutuhkan.
 */
const finishedTasksSelector = createSelector(
	allTasksSelector, finishedIdSelector,
	(tasks, finishedTasksIds) => (
		tasks.filter(task => finishedTasksIds.findIndex(id => id === task.id) >= 0)
	)
)

/**
 * Buat array yang berisi semua list, dengan task yang sudah selesai ditandai.
 */
const allTasksWithMarkSelector = createSelector(
	allTasksSelector, finishedIdSelector,
	(tasks, finishedTasksIds) => (
		tasks.map(task => finishedTasksIds.indexOf(task.id) < 0 ? task : {...task, isFinished: true})
	)
)

/**
 * Buat array task yang belum selesai
 */
const unfinishedTasksSelector = createSelector(
	allTasksSelector, finishedIdSelector,
	(tasks, finishedTasksIds) => (
		tasks.filter(task => finishedTasksIds.findIndex(id => id === task.id) < 0)
	)
)

export {finishedTasksSelector, allTasksWithMarkSelector, unfinishedTasksSelector}