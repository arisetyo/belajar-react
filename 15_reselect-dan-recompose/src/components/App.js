import React from 'react'
import styles from './style.css'
import {ConnectedAddTask} from './AddTask'
import {ConnectedAllTasks} from './AllTasks'
import {ConnectedFinishedTasks} from './FinishedTasks'
import {ConnectedUnfinishedTasks} from './UnfinishedTasks'
import {withState, pure, compose} from 'recompose'
import {allText, finishedText, unfinishedText, allButton, finishedButton, unfinishedButton} from '../helper/constants'

/**
 * Kita menambahkan state menggunakan Recompose pada komponen App
 */
const enhance = compose(
	withState('view', 'setView', 'all'),
	pure
)

/**
 * Buat komponen serapi mungkin, hindari penambahan fungsi di dalamnya.
 */
const selectView = view => {
	switch (view) {
		case 'all':
			return <ConnectedAllTasks header={allText}/>
		case 'finished':
			return <ConnectedFinishedTasks header={finishedText}/>
		case 'unfinished':
			return <ConnectedUnfinishedTasks header={unfinishedText}/>
		default:
			return <ConnectedAllTasks header={allText}/>
	}
}

const App = enhance(({view, setView}) => (
	<div className={styles.container}>
		<ConnectedAddTask/>
		<div className={styles.nav}>
			<button onClick={() => setView(view => view = 'all')}>{allButton}</button>
			<button onClick={() => setView(view => view = 'finished')}>{finishedButton}</button>
			<button onClick={() => setView(view => view = 'unfinished')}>{unfinishedButton}</button>
		</div>
		{selectView(view)}
	</div>
))

export default App