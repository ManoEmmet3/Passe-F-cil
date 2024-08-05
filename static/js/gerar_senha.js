document.addEventListener('DOMContentLoaded', (event) => {
    if (!localStorage.getItem('senhaCounterA')) {
        localStorage.setItem('senhaCounterA', 0);
    }
    if (!localStorage.getItem('senhaCounterC')) {
        localStorage.setItem('senhaCounterC', 0);
    }
});

function gerarSenha() {
    let prefixo = (Math.random() < 0.5) ? 'A' : 'C';
    let contador = parseInt(localStorage.getItem(`senhaCounter${prefixo}`)) + 1;

    localStorage.setItem(`senhaCounter${prefixo}`, contador);

    const senha = `${prefixo}${String(contador).padStart(4, '0')}`;

    const agora = new Date();
    const dataHora = agora.toLocaleString('pt-BR');

    document.getElementById('senha').value = senha;
    document.getElementById('dataHora').value = dataHora;
}

function limparCampos() {
    document.getElementById('senha').value = '';
    document.getElementById('dataHora').value = '';
    document.getElementById('local').value = 'Teresina/PI';
    document.getElementById('aviso').value = 'Se sua senha for chamada e você não estiver no local, uma nova senha deverá ser emitida.';
}