import { combineReducers } from 'redux';

const user = (state = {}, action) => { // this name has to match the default state property name, otherwise won't load default state
    switch (action.type) {
        case 'LOAD_COMMENT':
            console.log('here', action.allComments)
            return { ...state, allComments: action.allComments }
        case 'SET_LOADED_TRUE':
            return { ...state, loaded: true }
        case 'SET_LOADED_FALSE':
            return { ...state, loaded: false }
    }
    return state;
}

const admin = (state = {}, action) => { // this name has to match the default state property name, otherwise won't load default state
    // switch (action.type) {
    //     case 'LOAD_COMMENT':
    //         return { ...state, allComments: allComments }
    //     case 'SET_LOADED_TRUE':
    //         return { ...state, loaded: true }
    //     case 'SET_LOADED_FALSE':
    //         return { ...state, loaded: false }
    // }
    return state;
}

const combinedReducers = combineReducers({
        user,
        admin
    });

export default combinedReducers;
