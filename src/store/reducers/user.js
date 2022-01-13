import { SET_LOADING_STATUS, SET_USER } from '../../constants';

const initialState = {
	account: {
		login: 'alugalugcat',
		joined: 'July 22 2020',
		name: 'Alugalug cat',
		bio: 'Experienced musician',
		avatar_url: 'https://bit.ly/3qpAIyV',
		public_repos: 1180,
		followers: 2238119,
		following: 1210,
		location: 'U.S.A.',
		blog: 'https://www.youtube.com/watch?v=kG2JvYSqGR4',
		twitter_username: 'alugalugcat',
		twitter_link: 'https://twitter.com/johndoe',
		company: 'alugalugcompany',
	},
	isLoaded: true,
};

export function userReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				account: action.payload,
				isLoaded: true,
			};
		case SET_LOADING_STATUS:
			return {
				...state,
				isLoaded: action.payload,
			};
		default:
			return state;
	}
}
