import { combineReducers } from 'redux';
import { persistReducer  } from 'redux-persist';
import localForage from 'localforage';

import screenReducer from './reducers/screenReducer';authenticationReducer
import userReducer from './reducers/userReducer';
import authenticationReducer from './reducers/authenticationReducer'
const rootPersistConfig = {
    version: 0,
    key: 'keyDb',
    storage: localForage,
    whitelist: ['userToken', 'chatRooms', 'wallet', 'centerMap'],
};

const rootReducer = combineReducers({
    screens: screenReducer,
    user : userReducer,
    auth : authenticationReducer
});

export default persistReducer(rootPersistConfig, rootReducer);