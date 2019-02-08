import { combineReducers } from 'redux';

const user = (state = {}, action) => { // this name has to match the default state property name, otherwise won't load default state
    switch (action.type) {
        case 'EDITING_COMMENT':
            return { ...state, editing: true, editingComment: action.description, editingCommentId: action.id }
        case 'UPDATE_COMMENT':
            const updatedComments = state.allComments.map(e => e._id === state.editingCommentId ? { ...e, description: state.editingComment } : e)
            return { ...state, editing: false, editingComment: '', editingCommentId: '', allComments: updatedComments }
        case 'DELETE_COMMENT':
            const afterDeletedComments = state.allComments.filter(e => e._id !== action.id)
            return { ...state, allComments: afterDeletedComments }
        case 'LOAD_COMMENTS':
            return { ...state, allComments: action.allComments }
        case 'USER_LOGIN':
            const { loggedInAs, profileImg, userRole, username } = action.userData
            return { ...state, loggedIn: true, loggedInAs, profileImg, userRole, username }
        case 'USER_LOGOUT':
            return { ...state, username: '', loggedInAs: '', token: '', profileImg: '', userRole: '', registering: false, loggedIn: false, }
        case 'INPUT_USERNAME' :
            return { ...state, username: action.username }
        case 'INPUT_PASSWORD' :
            return { ...state, password: action.password }
        case 'INPUT_CONFIRM_PASSWORD' :
            return { ...state, rePassword: action.rePassword }
        case 'INPUT_EMAIL' :
            return { ...state, email: action.email }
        case 'INPUT_PROFILE_IMAGE' :
            return { ...state, profileImg: action.profileImg }
        case 'CLEAR_USER_INPUT':
            return { ...state, password: '', rePassword: '', email: '', editing: false, editingComment: '', editingCommentId: '' }
        case 'INPUT_COMMENT':
            return { ...state, comment: action.comment }
        case 'CLEAR_COMMENT':
            return { ...state, comment: '' }
        case 'ADD_COMMENT':
            const { allComments } = state
            return { ...state, allComments: [...allComments, action.newComment] }
        case 'SET_REGISTERING':
            return { ...state, registering: action.registering }
        case 'SET_FORGETPASS':
            return { ...state, forgetPass: action.forgetPass }
        case 'INPUT_EDITING_COMMENT':
            return { ...state, editingComment: action.editingComment }
        case 'UPDATE_TOKEN':
            return { ...state, token: action.token }
        case 'REMOVE_TOKEN':
            return { ...state, token: '' }
        default: 
            return state;
    }
}

const admin = (state = {}, action) => { // this name has to match the default state property name, otherwise won't load default state
    switch (action.type) {
        case 'LOAD_USERS':
            return { ...state, users: action.allUsers }
        default: 
            return state;
    }
}

const loading = (state = {}, action) => {
    switch (action.type) {
        case 'SET_LOADED_TRUE':
            return { ...state, loaded: true }
        case 'SET_LOADED_FALSE':
            return { ...state, loaded: false, userError: false, errorMessage: '' }
        case 'SET_ERROR':
            return { ...state, userError: true, errorMessage: action.errorMessage}
        case 'CLEAR_ERROR':
            return { ...state, userError: false, errorMessage: '' }
        default:
            return state;
    }
}

const combinedReducers = combineReducers({
        user,
        admin,
        loading
    });

export default combinedReducers;
