// generate beasic mongoose schema for a person = name, surname, email and phone number

const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  surname: {
    type: String,
    required: [true, 'Please provide a surname'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number'],
  },
});

module.exports = mongoose.model('Person', PersonSchema);