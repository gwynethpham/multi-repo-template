import _ from 'lodash';
import {
    ADD_POPUP,
    REMOVE_POPUP
} from '../actions/screenActions.js';

export default function (state = {}, action) {
    const { name, data, close, names, closes } = action.screen || action;
    switch (action.type) {
        case REMOVE_POPUP:
            // console.log('REMOVE_POPUP', state[name]);
            if(names && _.isArray(names)){
                for(const screenName of names){
                    delete state[screenName];
                }
            }
            if(name && state[name]) delete state[name];
            return {
                ...state,
            }
        case ADD_POPUP:
            // console.log('ADD_POPUP', name);
            if(name){
                if(closes && _.isArray(closes)){
                    if(closes && _.isArray(closes)){
                        for(const screenName of names){
                            delete state[screenName];
                        }
                    }
                }
                if(close && state[close]) delete state[close];
                if(state[name]) return { ...state };
                return {
                    ...state,
                    [name]: { ...data }
                }
            }
            return { ...state };
        default:
            return state
    }

}