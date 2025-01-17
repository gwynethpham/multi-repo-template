import {
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAILURE,

	GET_ALL_USER_SUCCESS,
	GET_ALL_USER_FAILURE,
} from '../actions/userActions';

const userReducer = (state = {}, action) => {
	switch(action.type) {
		case USER_REGISTER_SUCCESS :
			return {
				...state,
				user : action.user
			}
		case USER_REGISTER_FAILURE : 
			return {
				...state,
				error: action.error
			}
		default:
            return state
	}
}
export default userReducer;