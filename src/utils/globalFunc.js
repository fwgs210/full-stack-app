export const stripSpaces = string => string.trim().split(' ').join('');
export const confirmPopUp = message => window.confirm(message);