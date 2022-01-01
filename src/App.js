import Header from './components/header';
import SearchBar from './components/searchbar';
import UserProfile from './layouts/user-profile';
import './scss/index.scss';

function App() {
	return (
		<div className="devfinder__inner">
			<Header />
			<SearchBar />
			<UserProfile />
		</div>
	);
}

export default App;
