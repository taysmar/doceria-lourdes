const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  telefone: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Cliente', ClienteSchema);
