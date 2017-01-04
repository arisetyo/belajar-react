import React from 'react'
import Header from './Header'
import Paragraphs from './Paragraphs'
import RandomNumber from './RandomNumber'

const App = props => (
	<div>
		<Header name={props.visitorName}/>
		<RandomNumber/>
		<Paragraphs/>
	</div>
)

export default App