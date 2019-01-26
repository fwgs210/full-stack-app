import { createStore, applyMiddleware, compose } from 'redux';
import combinedReducers from './models/Reducers';
import thunk from 'redux-thunk';

const defaultState = {
    user: {
        profileImg: '',
        registering: false,
        loggedIn: false,
        loggedInAs: '',
        comment: '',
        allComments: [],
        displayComments: 5,
        editing: false,
        editingComment: '',
        editingCommentId: null,
        username: '',
        email: '',
        password: '',
        rePassword: '',
        token: '',
        forgetPass: false,
        userRole: ''
    },
    admin: {
        users: [],
        comments: [],
        editingUser: false,
        editingUserId: '',
        editingUsername: '',
        editingEmail: '',
        editingProfileImg: '',
        editingRole: '' 
    },
    loading: {
        loaded: false,
        userError: false,
        errorMessage: ''
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(combinedReducers, defaultState, composeEnhancers(
    applyMiddleware(thunk)
));