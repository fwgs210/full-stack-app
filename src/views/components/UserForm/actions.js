export const login = userData => ({
    type: 'USER_LOGIN',
    userData
})

export const logout = () => ({
    type: 'USER_LOGOUT'
})

export const typeUsername = username => ({
    type: 'INPUT_USERNAME',
    username: username.target.value.toLowerCase()
})

export const typePassword = password => ({
    type: 'INPUT_PASSWORD',
    password: password.target.value
})

export const typeConfirmPassword = rePassword => ({
    type: 'INPUT_CONFIRM_PASSWORD',
    rePassword: rePassword.target.value
})

export const typeEmail = email => ({
    type: 'INPUT_EMAIL',
    email: email.target.value
})

export const chooseProfile = profileImg => ({
    type: 'INPUT_PROFILE_IMAGE',
    profileImg
})

export const setRegistering = bool => ({
    type: 'SET_REGISTERING',
    registering: bool
})

export const setForgetPass = bool => ({
    type: 'SET_FORGETPASS',
    forgetPass: bool
})