$(document).ready(function() {
    $("input").keyup(function() {

        var val = $('input').val()

    if (val.length >= 5) {

        $('input').addClass('is-valid');
        $('input').removeClass('is-invalid');
        
    } else {
        $('input').addClass('is-invalid'); 
        $('input').removeClass('is-valid'); 
        }
    });
});