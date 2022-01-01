import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../api/user';
import Icon from '../Icon';

function SearchBar() {
	const dispatch = useDispatch();
	const [username, setUsername] = useState('');

	function handleChange(e) {
		setUsername(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (username.trim()) {
			dispatch(getUser('https://api.github.com/users/', username));
			setUsername('');
		}
	}

	return (
		<form className="search-bar" onSubmit={handleSubmit}>
			<Icon name="magnify" width="20" height="20" color="#b2cbe0" className="search-bar__icon" />
			<input type="text" value={username} onChange={handleChange} placeholder="Search github username" className="search-bar__input" />
			<button type="submit" className="search-bar__button">
				Search
			</button>
		</form>
	);
}

export default SearchBar;
