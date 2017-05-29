import React from 'react'
import styles from './style.css'
import {ConnectedAddTask} from './AddTask'
import {ConnectedAllTasks} from './AllTasks'
import {ConnectedFinishedTasks} from './FinishedTasks'
import {ConnectedUnfinishedTasks} from './UnfinishedTasks'
import {withState} from 'recompose'
import {allText, finishedText, unfinishedText, allButton, finishedButton, unfinishedButton} from '../helper/constants'

/**
 * Kita menambahkan state menggunakan Recompose pada komponen App
 */
const enhance = withState('view', 'setView', 'all')

const App = enhance(({view, setView}) => {
	let taskView
	switch (view) {
		case 'all':
			taskView = <ConnectedAllTasks header={allText}/>
			break
		case 'finished':
			taskView = <ConnectedFinishedTasks header={finishedText}/>
			break
		case 'unfinished':
			taskView = <ConnectedUnfinishedTasks header={unfinishedText}/>
			break
		default:
			return <ConnectedAllTasks header={allText}/>
	}

	return (
		<div className={styles.container}>
			<ConnectedAddTask/>
			<div className={styles.nav}>
				<button onClick={() => setView(view => view = 'all')}>{allButton}</button>
				<button onClick={() => setView(view => view = 'finished')}>{finishedButton}</button>
				<button onClick={() => setView(view => view = 'unfinished')}>{unfinishedButton}</button>
			</div>
			{taskView}
		</div>
	)
})

export default App