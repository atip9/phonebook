const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  });
  
  const User = mongoose.model('User', userSchema);


  module.exports = User