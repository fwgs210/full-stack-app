const User = require('../models/user')

module.exports = async () => {
    const adminExist = await User.findOne({ role: 'administrator' });
    if (!adminExist) {
        const admin = new User({
            username: 'info@tracysu.com',
            password: '87532998',
            email: 'admin',
            profileImg: 'http://resume.tracysu.com/assets/images/profile.png',
            role: 'administrator'
        })
        admin.save()
    }
}