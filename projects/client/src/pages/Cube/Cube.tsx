import React from 'react';
import { useHistory, RouteChildrenProps } from 'react-router-dom';
import Navigation from 'src/components/Navigation';

import styles from './cube.module.css';

type CubeProps = RouteChildrenProps<{
	id: string;
}>;

export default function Cube(props: CubeProps) {
	const { id } = props.match.params;

	return (
		<main>
			<Navigation />
			<div className={styles['index-container']}>
				<div>
					<div className={styles['avatar']}></div>
				</div>
				<div className={styles['body']}>
					<h2 className={styles['deck-title']}>Mono Blue {id}</h2>
					<table className={styles['decklist']}>
						<tr>
							<th>Card Name</th>
							<th>#</th>
						</tr>
						<tr>
							<td>Shark Typhoon</td>
							<td>1</td>
						</tr>
					</table>
				</div>
			</div>
		</main>
	);
}
