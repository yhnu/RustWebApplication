import React from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from 'src/components/Navigation';
import CubeCard from './CubeCard';

import styles from './cubes.module.css';

const TMP = ['RG Smash', 'Azorius Control', 'Sligh'];

export default function Cube() {
	const history = useHistory();
	return (
		<main className={styles['page']}>
			<Navigation />
			<div className={styles['cube-list-container']}>
				<section className={styles['cube-list']}>
					{TMP.map((tmp) => {
						return <CubeCard name={tmp} />;
					})}
				</section>
			</div>
		</main>
	);
}
