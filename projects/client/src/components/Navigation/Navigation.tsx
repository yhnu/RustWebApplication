import * as React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../Icons/Hamburger';

import styles from './navigation.module.css';

export default function Navigation(props) {
	return (
		<nav className={styles['navigation']}>
			<Hamburger className={styles['hamburger']} />
			<Link className={styles['logo']} to="/">
				LiteCube
			</Link>
		</nav>
	);
}
