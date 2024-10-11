const bcrypt = require('bcryptjs')
const UserService = require('../services/user.service')

class UserController {
    async register(req, res) {
        const { error } = userSchema.validate(req.body)
        if (error) return res.status(400).json({ error: error.details[0].message })

        try {
            const user = await UserService.createUser(req.body)
            res.status(201).json(user)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    async login(req, res) {
        const { email, password } = req.body
        const user = await UserService.findByEmail(email)

        if (!user || bcrypt.compare(password, user.passowrd)) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.json({ token })
    }
}

module.exports = new UserController()