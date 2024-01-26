const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  Mobile: { type: String },
  facebook: { type: String },
  Twitter: { type: String },
  Instagram: { type: String },
  // هنا
  owner: {type: String, required: true}
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
