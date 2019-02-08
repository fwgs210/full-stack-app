const nodemailer = require('nodemailer');
const token = require('./config/emailToken')

const transport = nodemailer.createTransport({
    service: token.EMAIL_HOST,
    auth: {
        type: token.EMAIL_CONNECTION_TYPE,
        user: token.EMAIL_USERNAME,
        clientId: token.EMAIL_CLIENTID,
        clientSecret: token.EMAIL_CLIENTSECRET,
        refreshToken: token.EMAIL_REFRESHTOKEN,
        accessToken: token.EMAIL_ACCESSTOKEN
    }
});

const mailTemplate = ({ toEmail, token }) => ({
    from: '"Password Reset" <donotreply@fullstackapp.com>',
    to: toEmail,
    subject: "Password Reset",
    generateTextFromHTML: true,
    html: `<h1>Below is your password reset link:</h1>
           <p><a href="https://tracysu.herokuapp.com/reset-password/${token}">Reset your password now</a></p>
           <p>&nbsp;</p>
           <p> - Tracy Su</p>
        ` 
})

module.exports.mailTemplate = mailTemplate;
module.exports.transport = transport;