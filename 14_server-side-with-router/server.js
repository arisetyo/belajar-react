import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'

import template from './html.template.js'

import App from './src/App'
import routes from './src/routes'
import NotFoundPage from './src/components/NotFound'

const server = express()

server.use('/build', express.static('build'))

// universal routing and rendering
server.get('*', (req, res) => {
	
	match(
		{routes, location: req.url},
		(err, redirectLocation, renderProps) => {

			//if (err) return res.status(500).send(err.message) // in case of error display the error message
			//if (redirectLocation) return res.redirect(302, redirectLocation.pathname + redirectLocation.search) // in case of redirect propagate the redirect to the browser

			// generate the React body for the current route
			let body;
			if (renderProps) {
				// if the current route matched we have renderProps
				body = renderToString(<RouterContext {...renderProps}/>)
			} else {
				// otherwise we can render a 404 page
				body = renderToString(<NotFound/>)
				res.status(404)
			}

			// render the template with the embedded React body
			res.send(template({body}))
		}
	);

});

server.listen(8077)