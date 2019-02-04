const User = require('../models/user')
const mongoose = require('mongoose')

const initAdminUser = async () => {
    const adminExist = await User.findOne({ role: 'administrator' });
    if (!adminExist) {
        const admin = new User({
            username: 'admin',
            password: '87532998',
            email: 'info@tracysu.com',
            profileImg: 'http://resume.tracysu.com/assets/images/profile.png',
            role: 'administrator',
            _id: new mongoose.Types.ObjectId()
        })
        admin.save()
    }
}

export default initAdminUser