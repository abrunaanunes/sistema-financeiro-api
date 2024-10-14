const mongoose = require('mongoose')
const user = require('../lang/pt-BR/user.lang.json')

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, user.name.required],
      trim: true,
      minlength: [3, user.name.minlength]
    },
    email: {
      type: String,
      required: [true, user.email.required],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, user.email.invalid]
    },
    password: {
      type: String,
      required: [true, user.password.required],
      minlength: [6, user.password.minlength],
      select: false
    }
  }, {
    timestamps: true
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})


module.exports = userSchema