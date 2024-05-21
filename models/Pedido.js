const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true
  },
  produtos: [{
    nome: String,
    quantidade: Number
  }],
  data: {
    type: Date,
    default: Date.now
  },
  total: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Pedido', PedidoSchema);
