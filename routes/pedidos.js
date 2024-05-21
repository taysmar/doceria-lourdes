const express = require('express');
const router = express.Router();
const Pedido = require('../models/Pedido');

// Rota para criar um novo pedido
router.post('/', async (req, res) => {
  try {
    const pedido = new Pedido(req.body);
    await pedido.save();
    res.status(201).send(pedido);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Rota para obter todos os pedidos
router.get('/', async (req, res) => {
  try {
    const pedidos = await Pedido.find().populate('cliente');
    res.status(200).send(pedidos);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
