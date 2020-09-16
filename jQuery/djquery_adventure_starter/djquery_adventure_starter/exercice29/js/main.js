$(document).ready(function() {
    $("button.btn.btn-success").click(function() {

    if ($('input').val().length > 5) {

        $('input').addClass('is-valid');
        
    } else {
        $('input').addClass('is-invalid');  
        }
    });
});

// marche pas

 
