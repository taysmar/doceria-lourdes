const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');

// Rota para criar um novo cliente
router.post('/', async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.status(201).send(cliente);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Rota para obter todos os clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).send(clientes);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
