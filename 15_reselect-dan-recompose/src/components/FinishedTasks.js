import React from 'react'
import {connect} from 'react-redux'
import {pure} from 'recompose'
import styles from './style.css'
import {finishedTasksSelector} from '../store/selectors'

const FinishedTasks = pure(({header, data}) => (
	<div className={styles.container}>
		<h4>{header}</h4>
		{data.map((task, index) => <div key={index} className={styles.task}>{task.content}</div>)}
	</div>
))

const mapStateToProps = state => ({data: finishedTasksSelector(state)})
export const ConnectedFinishedTasks = connect(mapStateToProps)(FinishedTasks)