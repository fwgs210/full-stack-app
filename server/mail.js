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

const mailTemplate = data => ({
    from: '"Password Recovery" <donotreply@fullstackapp.com>',
    to: data.email,
    subject: "Password Recovery",
    generateTextFromHTML: true,
    html: `<h1>Here are your login info</h1>
        <p>Username: ${data.username}</p>
        <p>Password: ${data.password}</p>
        ` 
})

module.exports.mailTemplate = mailTemplate;
module.exports.transport = transport;