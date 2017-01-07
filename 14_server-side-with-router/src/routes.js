import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Chrome from './components/Chrome'
import Home from './components/Home'
import Location from './components/Location'
import About from './components/About'
import NotFound from './components/NotFound'

const routes = (
	<Route path="/" component={Chrome}>
		<IndexRoute component={Home}/>
		
		<Route name='Location' path='location' component={Location}/>
		<Route name='About' path='about' component={About}/>
		<Route name='404' path='*' component={NotFound} />
	</Route>
);

export default routes;