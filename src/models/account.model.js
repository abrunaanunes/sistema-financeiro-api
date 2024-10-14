const mongoose = require('mongoose')
const account = require('../lang/pt-BR/account.lang.json')

const accountSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, account.title.required],
      trim: true,
      minlength: [3, account.title.minlength]
    },
    value: {
      type: mongoose.Types.Decimal128,
      required: [true, account.value.required],
      min: [0, account.value.min]
    },
    due_date: {
      type: Date,
      required: [true, account.due_date.required],
      validate: {
        validator: function(value) {
          return value >= new Date();
        },
        message: account.due_date.invalid
      }
    },
    status: {
      type: String,
      enum: ['pending', 'paid', 'expired'],
      default: 'pending'
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  }, {
    timestamps: true
  });

module.exports = accountSchema