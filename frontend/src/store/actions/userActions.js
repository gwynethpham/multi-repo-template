import {userService} from '../services/userService.js'

export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';

export const userActions = {
    // login,
    // logout,
    register,
    // getAll,
    // delete: _delete
};

function login(data) {

}
function register(data) {
    console.log('data',data)
    return dispatch => {
      userService.register(data) 
      .then(
        user=> dispatch({ type: USER_REGISTER_SUCCESS, user}) ,
        error =>  dispatch({type: USER_REGISTER_FAILURE, error})
        ) 
    }
}