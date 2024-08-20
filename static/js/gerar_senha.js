// Função para gerar uma senha aleatória
function gerarSenha() {
    var senha = "";
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var comprimento = 6; // Definindo o comprimento da senha

    for (var i = 0; i < comprimento; i++) {
        var randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(randomIndex);
    }

    // Preenche o campo de senha com a senha gerada
    document.getElementById("senha").value = senha;

    // Preenche o campo de data e hora com o valor atual
    var agora = new Date();
    var dataHoraFormatada = agora.toLocaleString();
    document.getElementById("dataHora").value = dataHoraFormatada;
}

// Função para limpar os campos do formulário
function limparCampos() {
    document.getElementById("senha").value = "";
    document.getElementById("dataHora").value = "";
    document.getElementById("aviso").value = "Se sua senha for chamada e você não estiver no local, uma nova senha deverá ser emitida.";
}
