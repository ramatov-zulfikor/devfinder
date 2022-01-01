import { SET_USER } from '../../constants';

function setUser(data) {
	return {
		type: SET_USER,
		payload: data,
	};
}

export default setUser;
