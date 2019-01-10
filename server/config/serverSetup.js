// This is the config for production
module.exports.PORT = process.env.PORT || 5000
module.exports.key = "tracy su"
module.exports.uri = process.env.MONGODB_URI || 'mongodb://localhost/todoApp'