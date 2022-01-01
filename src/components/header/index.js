import React from 'react';
import Icon from '../Icon';

function Header({ switcherCallback, isDarkTheme }) {
	return (
		<div className="devfinder__header">
			<span className="devfinder__logo">devfinder</span>
			<div className="theme-switcher" onClick={() => switcherCallback(!isDarkTheme)}>
				<span className="theme-switcher__text">{isDarkTheme ? 'Light' : 'Dark'}</span>
				<Icon className="theme-switcher__icon" name={isDarkTheme ? 'light' : 'dark'} width="20" height="20" color="#000000" />
			</div>
		</div>
	);
}

export default Header;
