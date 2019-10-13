import {apiLand} from '../../helpers/config.js';
import {authHeader} from '../../helpers/authHeader'
export const userService = {
    register,login,getAll
};

export function register(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(`${apiLand}/users/register`, requestOptions).then(handleResponse).catch(err => handleResponseError(err));
}
export function login(data) {
    const requestOptions = {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    return fetch(`${apiLand}/users/authenticate`, requestOptions)
    .then(handleResponse)
    // .then(user => {
    //     if (typeof user.token !== 'undefined' && (user.token) && (user.token) !== '') {
    //         localStorage.setItem('token', user.token);
    //     }
    //     return user;
    // })
    .catch(err => handleResponseError(err));
}

export function getAll() {
    const requestOptions = {
        method : 'POST',
        headers : authHeader()
    }
    return fetch(`${apiLand}/users/getall`,requestOptions).then(handleResponse).catch(err=>handleResponseError(err))
}
export function logout() {
    localStorage.removeItem('user');
}

export function handleResponse(response)
{
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok)
        {
            if (response.status === 401)
                window.location.reload(true);

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
       
        return data;
    });
}

export function handleResponseError(err){
    if(err.toString() === 'TypeError: Failed to fetch'){
        store.dispatch(alertActions.tokenExpiredPopup(err))
    }
}
