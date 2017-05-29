import React from 'react'
import AnotherFunctionalComponent from './AnotherFunctionalComponent'

const FunctionalComponent = ({msg, arr}) => (
	<div>
		<p>{msg}</p>
		{arr && arr.map(item => <AnotherFunctionalComponent key={item} id={item}/>)}
	</div>		
)

export default FunctionalComponent