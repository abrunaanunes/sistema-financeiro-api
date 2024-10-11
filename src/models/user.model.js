const mongoose = require('mongoose')
const Joi = require('joi')

const userSchema = mongoose.Schema({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})


module.exports = userSchema