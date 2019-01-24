import { createStore, applyMiddleware, compose } from 'redux';
import combinedReducers from './Reducers';
import thunk from 'redux-thunk';

const defaultState = {
    user: {
        loaded: false,
        profileImg: '',
        registering: false,
        loggedIn: false,
        loggedInAs: '',
        comment: '',
        allComments: [],
        displayComments: 5,
        editing: false,
        editingTodo: '',
        editingTodoId: null,
        username: '',
        email: '',
        password: '',
        rePassword: '',
        userError: false,
        errorMessage: '',
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
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(combinedReducers, defaultState, composeEnhancers(
    applyMiddleware(thunk)
));