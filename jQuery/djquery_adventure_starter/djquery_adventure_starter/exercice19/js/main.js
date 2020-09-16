$(document).ready(function() {
    $("button.btn.btn-success").click(function() {
        $('input.disabled').html({
            'disabled':'false'
        })
    });
});