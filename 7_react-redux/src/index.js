import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import {ConnectedApp} from './App'
import {store} from './reducer'

render(
	<Provider store={store}>
		<ConnectedApp />
	</Provider>,
	document.getElementById('root')
)