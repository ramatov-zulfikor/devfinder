import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/header';
import Placeholder from './components/placeholder';
import SearchBar from './components/searchbar';
import UserProfile from './layouts/user-profile';
import './scss/index.scss';

function App() {
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const { account, isLoaded } = useSelector((state) => state.user);

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
		<div className="devfinder__inner">
			<Header switcherCallback={setIsDarkTheme} isDarkTheme={isDarkTheme} />
			<SearchBar />
			<div className="devfinder__content">
				{isLoaded ? <UserProfile user={account} /> : <Placeholder backgroundColor={isDarkTheme ? '#3d4b6c' : '#f5f5f5'} foregroundColor={isDarkTheme ? '#455582' : '#e8e8e8'} />}
			</div>
		</div>
	);
}

export default App;
