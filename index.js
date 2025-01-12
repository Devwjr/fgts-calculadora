document.getElementById('fgtsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const salario = parseFloat(document.getElementById('salario').value);
    const meses = parseInt(document.getElementById('meses').value);

    if (isNaN(salario) || isNaN(meses)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const fgtsMensal = salario * 0.08;
    const fgtsTotal = fgtsMensal * meses;

    document.getElementById('resultado').innerText = `O total do FGTS acumulado é: R$ ${fgtsTotal.toFixed(2)}`;
});
