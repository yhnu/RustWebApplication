import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Application from 'src/pages/Application';
import Cubes from 'src/pages/Cubes';
import Cube from 'src/pages/Cube';

export default function Routes() {
	return (
		<HashRouter>
			<Route exact path="/cube" component={Cubes} />
			<Route path="/cube/:id" component={Cube} />
			<Route exact path="/" component={Application} />
		</HashRouter>
	);
}
