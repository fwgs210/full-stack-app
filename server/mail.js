const token = require('./config/emailToken')
const mailer = require('sendgrid')(token.SENDGRID_API_KEY);

module.exports.request = data => mailer.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: {
        personalizations: [
            {
                to: [
                    {
                        email: data.email,
                    },
                ],
                subject: 'Hello World from the SendGrid Node.js Library!',
            },
        ],
        from: {
            email: 'donotreply@tracy-su-full-stack-app.com',
        },
        subject: 'Password Recovery',
        content: [
            {
                type: 'text/html',
                value: `<h1>Here are your login info</h1>
                    <p>Username: ${data.username}</p>
                    <p>Password: ${data.password}</p>
                    `,
            },
        ],
    },
});

module.exports.mailer = mailer