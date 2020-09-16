$(document).ready(function() {
    $("button.btn.btn-success").click(function() {
        $('#square').animate({
            'position':'relative',
            'bottom':'5px',
            'right':'5px'
        });
    });
});