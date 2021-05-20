import React from 'react';

import styles from './cube-card.module.css';
import { Link } from 'react-router-dom';

interface CubeProps {
	name: string;
}

export default function Cube(props: CubeProps) {
	const { name } = props;
	return (
		<Link to={'/cube/1'}>
			<article className={styles['card']}>
				<div className={styles['card-title']}>{name.toUpperCase()}</div>
			</article>
		</Link>
	);
}
