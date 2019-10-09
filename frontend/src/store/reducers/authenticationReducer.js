import {
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,

	USER_LOGOUT_SUCCESS,
	USER_LOGOUT_FAILURE,

	USER_LOGIN_REQUEST,
	
} from '../actions/userActions';

const authenticationReducer = (state = {loggedIn : false, user : {}}, action) => {
	switch(action.type) {
		case USER_LOGIN_SUCCESS :
			return {
				...state,
		        loggedIn: true,
		        user: action.user
	       };
		case USER_LOGIN_FAILURE :
			return {
				...state,
				loggedIn: false,
				error: action.error
			}
		case USER_LOGIN_REQUEST : 
			return {
				...state,
                loggedIn: true,
                user: action.user
			}
		default:
            return state
	}
}
export default authenticationReducer;