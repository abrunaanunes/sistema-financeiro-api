
const User = require('../models/user.model')

class UserService {
    async createUser(data) {
        const user = new User(data)
        return await user.save()
    }

    async findByEmail(email) {
        return await User.findOne({ email })
    }
}

module.exports = new UserService()