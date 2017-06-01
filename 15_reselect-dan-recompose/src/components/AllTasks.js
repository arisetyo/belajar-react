import React from 'react'
import styles from './style.css'
import {connect} from 'react-redux'
import {pure} from 'recompose'
import {finishTask} from '../store/actions'
import {allTasksWithMarkSelector} from '../store/selectors'

const AllTasks = pure(({header, tasksWithMark, doFinishTask}) => (
	<div className={styles.container}>
		<h4>{header}</h4>
		{tasksWithMark.map(task => <div key={task.id} onClick={() => task.isFinished ? null : doFinishTask(task.id)} className={`${styles.task} ${task.isFinished ? styles.finished : ''}`}>{task.content}</div>)}
	</div>
))

/**
 * Kita menggunakan Reselect untuk mengambil data yang dibutuhkan dari Redux
 * dan membuat komponen yang fokus pada menampilkan data
 * Pattern ini memungkinkan kita menghindari membuat fungsi/obyek/array/dll baru di dalam fungsi render()
 */
const mapStateToProps = state => ({tasksWithMark: allTasksWithMarkSelector(state)})
const mapDispatchToProps = dispatch => ({doFinishTask: id => dispatch(finishTask(id))})
export const ConnectedAllTasks = connect(mapStateToProps, mapDispatchToProps)(AllTasks)