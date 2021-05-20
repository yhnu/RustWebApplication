import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from 'src/components/Navigation';
import Native from 'src/native';
import ApplicationApi from 'src/api/application';

import './application.css';

const Application: React.FunctionComponent = () => {
	const history = useHistory();

	return (
		<div className="application-container">
			<Navigation />
			<div>
				<button
					onClick={() => {
						Native.print('This is really cool');
						history.push('/cube');
					}}
				>
					Log
				</button>
				<button
					onClick={() => {
						Native.openFile();
					}}
				>
					Open
				</button>
				<button
					onClick={() => {
						// Native.temp('3e92ccb8-b9da-5b7f-bdee-22e211b449f0');
						ApplicationApi.getCardsByName('Shark Typhoon');
					}}
				>
					Woah
				</button>
			</div>
		</div>
	);
};

export default Application;
