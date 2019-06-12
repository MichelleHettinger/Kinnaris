const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;