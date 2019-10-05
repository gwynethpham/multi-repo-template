import {
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAILURE
} from '../actions/userActions';

const userReducer = (state = {}, action) => {
	switch(action.type) {
		case USER_REGISTER_SUCCESS :
			console.log('action',action.user)
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