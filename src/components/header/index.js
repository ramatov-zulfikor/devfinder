import React, { useEffect, useState } from 'react';
import Icon from '../Icon';

function Header() {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	useEffect(() => {
		const theme = JSON.parse(localStorage.getItem('isDarkTheme'));
		if (theme) {
			setIsDarkTheme(theme);
			document.body.classList.add('dark');
		}
	}, []);

	useEffect(() => {
		const body = document.body;
		isDarkTheme ? body.classList.add('dark') : body.classList.remove('dark');
		localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
	}, [isDarkTheme]);

	return (
		<div className="devfinder__header">
			<span className="devfinder__logo">devfinder</span>
			<div className="theme-switcher" onClick={() => setIsDarkTheme(!isDarkTheme)}>
				<span className="theme-switcher__text">{isDarkTheme ? 'Light' : 'Dark'}</span>
				<Icon className="theme-switcher__icon" name={isDarkTheme ? 'light' : 'dark'} width="20" height="20" color="#000000" />
			</div>
		</div>
	);
}

export default Header;
