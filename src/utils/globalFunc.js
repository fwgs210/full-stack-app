export const stripSpaces = string => string.trim().split(' ').join('');
export const confirmPopUp = message => window.confirm(message);
export const validatePassword = password => {
    const upper = /[A-Z]/;
    const lower = /[a-z]/;
    const numbers = /[0-9]/;
    const special = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const space = /\s/g;

    const valid = (!space.test(password) && upper.test(password) && lower.test(password) && numbers.test(password) && special.test(password) && password.length > 7) ? true : false

    return valid

}
export const validateEmail = email => {
    var validate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validate.test(email);
}