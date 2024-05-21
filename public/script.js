document.getElementById('cadastroForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    const response = await fetch('/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, telefone })
    });

    if (response.ok) {
        alert('Cliente cadastrado com sucesso!');
        document.getElementById('cadastroForm').reset();
    } else {
        alert('Erro ao cadastrar cliente.');
    }
});

document.getElementById('pedidoForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const clienteId = document.getElementById('clienteId').value;
    const produtosInput = document.getElementById('produtos').value;
    const produtosArray = produtosInput.split(',').map(produto => {
        const [nome, quantidade] = produto.split(' ');
        return { nome, quantidade: parseInt(quantidade) };
    });
    const total = parseFloat(document.getElementById('total').value);

    const response = await fetch('/pedidos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cliente: clienteId, produtos: produtosArray, total })
    });

    if (response.ok) {
        alert('Pedido enviado com sucesso!');
        document.getElementById('pedidoForm').reset();
    } else {
        alert('Erro ao enviar pedido.');
    }
});
