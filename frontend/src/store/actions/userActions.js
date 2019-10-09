import {userService} from '../services/userService.js'

export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

export const GET_ALL_USER_SUCCESS = 'GET_ALL_USER_SUCCESS';
export const GET_ALL_USER_FAILUSE = 'GET_ALL_USER_FAILUSE';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    // delete: _delete
};

function login({email, password}) {
    return dispatch => {
        dispatch(request(email));
        userService.login({email, password}).then(
            user => dispatch({type : USER_LOGIN_SUCCESS, user}),
            error => dispatch({type : USER_LOGIN_FAILURE, user})
        )
    }
    function request(user) { return {type : USER_LOGIN_REQUEST, user} };
}
function register(data) {
    return dispatch => {
      userService.register(data).then(
            user=> dispatch({ type: USER_REGISTER_SUCCESS, user}) ,
            error =>  dispatch({type: USER_REGISTER_FAILURE, error})
        ) 
    }
}
function logout() {
    return dispatch => {
        userService.logout(data)
        .then (
            user => dispatch({type : USER_LOGOUT_SUCCESS, user}),
            error => dispatch({type :USER_LOGOUT_FAILURE, error})
        )
    }
}
function getAll() {
    return dispatch => {
        userService.getAll().then (
            user => dispatch({type : GET_ALL_USER_SUCCESS, user}),
            error => dispatch({type : GET_ALL_USER_FAILUSE})
        )
    }
}