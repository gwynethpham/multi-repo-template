import {
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAILURE,

	GET_ALL_USER_SUCCESS,
	GET_ALL_USER_FAILURE,
} from '../actions/userActions';

const userReducer = (state = {login: false, user : {}}, action) => {
	switch(action.type) {
		case USER_REGISTER_SUCCESS :
			return {
				...state,
				login: true,
				user : action.user
			}
		case USER_REGISTER_FAILURE : 
			return {
				...state,
				login: false,
				error: action.error
			}
		default:
            return state
	}
}
export default userReducer;