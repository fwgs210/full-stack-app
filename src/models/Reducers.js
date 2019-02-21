import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

const user = (state = {}, action) => { // this name has to match the default state property name, otherwise won't load default state
    state = fromJS(state)
    switch (action.type) {
        case 'EDITING_COMMENT':
            return state.merge({ editing: true, editingComment: action.description, editingCommentId: action.id })
        case 'UPDATE_COMMENT':
            const updatedComments = state.get('allComments').map(e => e._id === state.get('editingCommentId') ? { ...e, description: state.get('editingComment') } : e)
            return state.merge({ editing: false, editingComment: '', editingCommentId: '', allComments: updatedComments })
        case 'DELETE_COMMENT':
            const afterDeletedComments = state.get('allComments').filter(e => e._id !== action.id)
            return state.set('allComments', afterDeletedComments)
        case 'LOAD_COMMENTS':
            return state.set('allComments', action.allComments)
        case 'USER_LOGIN':
            const { loggedInAs, profileImg, userRole, username } = action.userData
            return state.merge({loggedIn: true, loggedInAs, profileImg, userRole, username })
        case 'USER_LOGOUT':
            return state.merge({ username: '', loggedInAs: '', token: '', profileImg: '', userRole: '', registering: false, loggedIn: false, })
        case 'INPUT_USERNAME' :
            return state.set('username', action.username)
        case 'INPUT_PASSWORD' :
            return state.set('password', action.password)
        case 'INPUT_CONFIRM_PASSWORD' :
            return state.set('rePassword', action.rePassword)
        case 'INPUT_EMAIL' :
            return state.set('email', action.email)
        case 'INPUT_PROFILE_IMAGE' :
            return state.set('profileImg', action.profileImg)
        case 'CLEAR_USER_INPUT':
            return state.merge({ password: '', rePassword: '', email: '', editing: false, editingComment: '', editingCommentId: '' })
        case 'INPUT_COMMENT':
            return state.set('comment', action.comment)
        case 'CLEAR_COMMENT':
            return state.set('comment', '')
        case 'ADD_COMMENT':
            return state.update('allComments', arr => arr.concat([action.newComment]))
        case 'SET_REGISTERING':
            return state.set('registering', action.registering)
        case 'SET_FORGETPASS':
            return state.set('forgetPass', action.forgetPass)
        case 'INPUT_EDITING_COMMENT':
            return state.set('editingComment', action.editingComment)
        case 'UPDATE_TOKEN':
            return state.set('token', action.token)
        case 'REMOVE_TOKEN':
            return state.set('token', '')
        default: 
            return state;
    }
}

const admin = (state = {}, action) => { // this name has to match the default state property name, otherwise won't load default state
    state = fromJS(state)
    switch (action.type) {
        case 'LOAD_USERS':
            return state.set('users', action.allUsers)
        default: 
            return state;
    }
}

const loading = (state = {}, action) => {
    state = fromJS(state)
    switch (action.type) {
        case 'SET_LOADED_TRUE':
            return state.set('loaded', true)
        case 'SET_LOADED_FALSE':
            return state.merge({ loaded: false, userError: false, errorMessage: '' })
        case 'SET_ERROR':
            return state.merge({ userError: true, errorMessage: action.errorMessage})
        case 'CLEAR_ERROR':
            return state.merge({ userError: false, errorMessage: '' })
        default:
            return state;
    }
}

const combinedReducers = combineReducers({
        user,
        admin,
        loading,
    });

export default combinedReducers;
