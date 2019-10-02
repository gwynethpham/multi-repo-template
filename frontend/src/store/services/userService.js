import {apiLand} from '../../helpers/config.js'
export const userService = {
    register
};

export function register(data) {
    console.log('data----',data)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(`${apiLand}/users/register`, requestOptions).then(handleResponse).catch(err => handleResponseError(err));
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
