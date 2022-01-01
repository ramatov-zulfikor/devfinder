import { SET_USER } from '../../constants';

const initialState = {
	login: 'alugalugcat',
	joined: 'July 22 2020',
	name: 'Alugalug cat',
	bio: 'Experienced musician',
	avatar_url: 'https://bit.ly/3sOIBPP',
	public_repos: 1180,
	followers: 2238119,
	following: 1210,
	location: 'U.S.A.',
	blog: 'https://www.youtube.com/watch?v=kG2JvYSqGR4',
	twitter_username: 'alugalugcat',
	twitter_link: 'https://twitter.com/johndoe',
	company: 'alugalugcompany',
};

export function userReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			return action.payload;
		default:
			return state;
	}
}
