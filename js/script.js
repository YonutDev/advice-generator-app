function getAdvice() {
    $.getJSON('https://api.adviceslip.com/advice', function(data) {
        $('.advice-id').text("Advice #"+ data.slip.id);
        $('.advice-quote').text("“"+ data.slip.advice + "”");
    }); 
}
getAdvice();
$('.advice-regenerate').click(function() {
    getAdvice();
});

// Divider
if ($(window).width() < 480) {
    $('.advice-divider').attr('data', 'img/pattern-divider-mobile.svg');
}