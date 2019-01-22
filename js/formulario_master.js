
// Check for valid email syntax
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

//metodo para limpiar las variables
function closeForm() {
    document.contactform.name.value = '';
    document.contactform.email.value = '';
    document.contactform.message.value = '';

    $('.email').removeClass('typing');
    $('.name').removeClass('typing');
    $('.message').removeClass('typing');

    $('.cd-popup').removeClass('is-visible');
    $('.notification').addClass('is-visible');
    $('#notification-text').html("¡Gracias por contactarnos!");
};


$(document).ready(function ($) {

    /* ------------------------- */
    /* Contact Form Interactions */
    /* ------------------------- */
    $('#contact').on('click', function (event) {
        event.preventDefault();

        $('#contactblurb').html('Preguntas, sugerencias y comentarios generales son bienvenidos!');
        $('.contact').addClass('is-visible');

        if ($('#name').val().length != 0) {
            $('.name').addClass('typing');
        }
        if ($('#email').val().length != 0) {
            $('.email').addClass('typing');
        }
        if ($('#message').val().length != 0) {
            $('.message').addClass('typing');
        }
    });

    //close popup when clicking x or off popup
    $('.cd-popup').on('click', function (event) {
        if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });

    //close popup when clicking the esc keyboard button
    $(document).keyup(function (event) {
        if (event.which == '27') {
            $('.cd-popup').removeClass('is-visible');
        }
    });

    /* ------------------- */
    /* Contact Form Labels */
    /* ------------------- */
    $('#name').keyup(function () {
        $('.name').addClass('typing');
        if ($(this).val().length == 0) {
            $('.name').removeClass('typing');
        }
    });
    $('#email').keyup(function () {
        $('.email').addClass('typing');
        if ($(this).val().length == 0) {
            $('.email').removeClass('typing');
        }
    });
    $('#message').keyup(function () {
        $('.message').addClass('typing');
        if ($(this).val().length == 0) {
            $('.message').removeClass('typing');
        }
    });

    /* ----------------- */
    /* Handle submission */
    /* ----------------- */
    $('#contactform').submit(function () {
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var human = $('#human:checked').val();

        if (human) {
            if (validateEmail(email)) {
                if (name) {
                    if (message) {

                    } else {
                        $('#notification-text').html("<strong>Por favor, háganos saber lo que está pensando!</strong>");
                        $('.notification').addClass('is-visible');
                    }
                } else {
                    $('#notification-text').html('<strong>Por favor proporcione un nombre</strong>');
                    $('.notification').addClass('is-visible');
                }
            } else {
                $('#notification-text').html('<strong>Por favor utilice una dirección de correo electrónico válida.</strong>');
                $('.notification').addClass('is-visible');
            }
        } else {
            $('#notification-text').html('<h3><strong><em> Advertencia: Por favor, demuestre que es un humano y no un robot  </em></strong></h3>');
            $('.notification').addClass('is-visible');
        }

        return false;
    });
});