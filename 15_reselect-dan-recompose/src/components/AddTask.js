import React from 'react'
import {connect} from 'react-redux'
import {compose, defaultProps, withState, pure} from 'recompose'
import {addTask} from '../store/actions'
import {placeholderText, buttonText} from '../helper/constants'
import styles from './style.css'

/**
 * Kita menambahkan state dan default property menggunakan Recompose pada komponen AddTask.
 * Ini menjaga agar kode tetap sederhana dengan menghindari penggunaan Class.
 * Kita juga menggunakan pure untuk membuat komponen hanya di-render ulang bila menerima properties yang berbeda.
 * Ini sama dengan menggunakan PureComponent.
 */
const enhance = compose(
	withState('content', 'setContent', ''),
	defaultProps({placeholderText}),
	pure
)

const AddTask = enhance(({content, setContent, placeholderText, doAddTask}) => {
	/**
	 * Menggunakan arrow function di dalam render juga mengurangi performa.
	 * Jadi kita akan mengurangi penggunaannya di dalam render.
	 * Kita dapat membuat method untuk fungsi-fungsi yang tidak menggunakan variabel dari proses render
	*/
	const handleChange = e => {
		setContent(content = e.target.value)
	}
	const handleEnter = e => {
		e.preventDefault()
		doAddTask(content)
		setContent(content = '')
	}

	return (
		<form onSubmit={handleEnter} className={styles.container}>
			<input type='text' placeholder={placeholderText} value={content} onChange={handleChange}/>
		</form>
	)
})

const mapDispatchToProps = dispatch => ({doAddTask: content => dispatch(addTask(content))})
export const ConnectedAddTask = connect(null, mapDispatchToProps)(AddTask)