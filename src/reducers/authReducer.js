import { startLogin } from '../actions/auth';

const initialState = {
	cheking: true,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case startLogin:
			return state;
		default:
			return state;
	}
};
