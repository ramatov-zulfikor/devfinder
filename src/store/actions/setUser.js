import { SET_USER, SET_LOADING_STATUS } from '../../constants';

export function setUser(data) {
	return {
		type: SET_USER,
		payload: data,
	};
}

export function setLoadingStatus(status) {
	return {
		type: SET_LOADING_STATUS,
		payload: status,
	};
}
