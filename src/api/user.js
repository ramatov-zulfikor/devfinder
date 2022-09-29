import axios from 'axios';
import { setUser, setLoadingStatus } from '../store/actions/setUser';

export function getUser(url, username) {
	return (dispatch) => {
		dispatch(setLoadingStatus(false));
		axios
			.get(`${url + username}`)
			.then((res) => {
				const { login, created_at, bio, avatar_url, company, name, blog, location, public_repos, followers, following, twitter_username } = res.data;
				
				const resultState = {
					login: login.toLowerCase(),
					joined: new Date(created_at).toDateString().slice(4, 15),
					bio,
					avatar_url,
					company,
					blog,
					name,
					location,
					public_repos,
					followers,
					following,
					twitter_username,
					twitter_link: `https://twitter.com/${twitter_username}`
				};
			
				dispatch(setUser(resultState));
			})
			.catch((e) => console.log(e.response));
	};
}
