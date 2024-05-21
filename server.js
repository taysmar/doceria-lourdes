const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/doceria_da_lourdes', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));

// Rotas
const clientesRouter = require('./routes/clientes');
const pedidosRouter = require('./routes/pedidos');

app.use('/clientes', clientesRouter);
app.use('/pedidos', pedidosRouter);

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
