import React from 'react'

const ComponentInput = props => {
	return (
		<input className='ComponentInput' type='text' placeholder='A text input component' value={props.value}/>
	)
}

export default ComponentInput