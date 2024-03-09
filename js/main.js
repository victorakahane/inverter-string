 // Adiciona um listener para detectar clique no botão inverter
document.querySelector('#inverter').addEventListener('click', inverter);

function inverter() {
    var stringInvertida = "";
    let str = document.querySelector('#str').value;
    let res = document.querySelector('#res');

    // Verifica se o campo está vazio
    if (str == '') {
        alert('Preencha o campo para inverter');
        res.style.display = 'none';
    }
    else {
        // Inverte a string digitada pelo usuário
        for (var i = str.length - 1; i >= 0; i--) {
            stringInvertida += str[i];
        }
        res.style.display = 'block';
        res.innerHTML = stringInvertida;
    }
}