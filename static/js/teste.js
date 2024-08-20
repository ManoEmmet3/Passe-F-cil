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
            previous : 'step',
            next : 'Step',
            finish : 'Confirm',
        },
    });
});

$(document).ready(function() {
    $(".pagination-buttons a").on("click", paginationClickHandler);
});
