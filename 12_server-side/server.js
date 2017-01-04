import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import App from './src/App'
import template from './html.template.js'

const server = express();

server.use('/build', express.static('build'));

server.get('/', (req, res) => {
	//mengirimkan value dari server
	const visitorName = 'Joni';

	//membuat state awal untuk app yang di-render oleh server
	const initialState = {visitorName};

	//me-render request awal
  const appString = renderToString(<App {...initialState}/>);

  res.send(template({
    body: appString,
    title: 'Server Side',
    initialState: JSON.stringify(initialState)
  }));
});

server.listen(8077);