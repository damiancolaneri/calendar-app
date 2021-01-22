import { fetchSinToken, fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';

export const startLogin = (email, password) => {
	return async (dispatch) => {
		const resp = await fetchSinToken('auth', { email, password }, 'POST');
		const body = await resp.json();

		console.log(body);
	};
};
