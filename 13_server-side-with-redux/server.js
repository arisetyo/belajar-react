import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {todoReducer} from './src/reducer'
import ConnectedApp from './src/App'
import template from './html.template.js'

const server = express();

server.use('/build', express.static('build'));

server.get('/', (req, res) => {
	// Create a new Redux store instance
	const store = createStore(todoReducer)
	const initialState = store.getState()

	//initial render from server. afterwards it's handled by the client.
	const body = renderToString(
		<Provider store={store}>
			<ConnectedApp/>
		</Provider>
	)

	res.send(template({body, initialState}));
});

server.listen(8077);