import React from 'react';

// Styles
import styles from './Header.module.scss';


const Header = () => {
	return (
		<header className={styles['header']}>
			<div className="container">
				<div className={styles['header__content']}>
					<h1>Todo list</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;