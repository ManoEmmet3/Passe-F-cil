$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<span class="title">#title#</span>',
        labels: {
            previous : 'Previous',
            next : 'Next Step',
            finish : 'Confirm',
            current : ''
        },
        onFinished: function (event, currentIndex) {
            $('#success-message').show(); // Exibe a mensagem de sucesso ao concluir o formulário
        }
    });
});