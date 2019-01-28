$(function() {

    // contact form animations
    $('#contact').click(function() {
        $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
        var container = $("#contactForm");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.fadeOut();
        }
    });

});


(function () {
    emailjs.init("user_p7Lb20gXPbFdHAmEGDXlp");
})();
const vue = new Vue({
    el: '#app',
    data() {
        return {
            from_name: '',
            from_email: '',
            message: '',
            phone: '',
        }
    },
    methods: {
        enviar() {
            let data = {
                from_name: this.from_name,
                from_email: this.from_email,
                message: this.message,
                phone: this.phone,
            };


            //validar campos del formulario
            var txtNombre = document.getElementById('nombre').value;
            var txtCorreo = document.getElementById('correo').value;
            var txttelefono = document.getElementById('telefono').value;
            var banderaRBTN = false;

            //Test campo obligatorio
            if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
                alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
                return false;
            }
            //Test edad
            if(txttelefono == null || txttelefono.length == 0 || isNaN(txttelefono)){
                alert('ERROR: Debe ingresar un Telefono');
                return false;
            }


            //Test correo
            if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
                alert('ERROR: Debe escribir un correo válido');
                return false;
            }


            if(txtNombre != null && txtCorreo != null && txttelefono != null){
                emailjs.send("gmail", "template_2WohEOBK", data)
                    .then(function (response) {
                        if (response.text === 'OK') {
                            alert('El correo se ha enviado de forma exitosa');
                        }
                        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                    }, function (err) {
                        alert('Ocurrió un problema al enviar el correo');
                        console.log("FAILED. error=", err);
                    });
            }else{
                alert('Por favor verifique los campos del formulario');
            }

        }
    }
});


//
// // Check for valid email syntax
// function validateEmail(email) {
//     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// };
//
// //metodo para limpiar las variables
// function closeForm() {
//     document.contactform.name.value = '';
//     document.contactform.email.value = '';
//     document.contactform.message.value = '';
//
//     $('.email').removeClass('typing');
//     $('.name').removeClass('typing');
//     $('.message').removeClass('typing');
//
//     $('.cd-popup').removeClass('is-visible');
//     $('.notification').addClass('is-visible');
//     $('#notification-text').html("¡Gracias por contactarnos!");
// };
//
//
// $(document).ready(function ($) {
//
//     /* ------------------------- */
//     /* Contact Form Interactions */
//     /* ------------------------- */
//     $('#contact').on('click', function (event) {
//         event.preventDefault();
//
//         $('#contactblurb').html('Preguntas, sugerencias y comentarios generales son bienvenidos!');
//         $('.contact').addClass('is-visible');
//
//         if ($('#name').val().length != 0) {
//             $('.name').addClass('typing');
//         }
//         if ($('#email').val().length != 0) {
//             $('.email').addClass('typing');
//         }
//         if ($('#message').val().length != 0) {
//             $('.message').addClass('typing');
//         }
//     });
//
//     //close popup when clicking x or off popup
//     $('.cd-popup').on('click', function (event) {
//         if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
//             event.preventDefault();
//             $(this).removeClass('is-visible');
//         }
//     });
//
//     //close popup when clicking the esc keyboard button
//     $(document).keyup(function (event) {
//         if (event.which == '27') {
//             $('.cd-popup').removeClass('is-visible');
//         }
//     });
//
//     /* ------------------- */
//     /* Contact Form Labels */
//     /* ------------------- */
//     $('#name').keyup(function () {
//         $('.name').addClass('typing');
//         if ($(this).val().length == 0) {
//             $('.name').removeClass('typing');
//         }
//     });
//     $('#email').keyup(function () {
//         $('.email').addClass('typing');
//         if ($(this).val().length == 0) {
//             $('.email').removeClass('typing');
//         }
//     });
//     $('#message').keyup(function () {
//         $('.message').addClass('typing');
//         if ($(this).val().length == 0) {
//             $('.message').removeClass('typing');
//         }
//     });
//
//     /* ----------------- */
//     /* Handle submission */
//     /* ----------------- */
//     $('#contactform').submit(function () {
//         var name = $('#name').val();
//         var email = $('#email').val();
//         var message = $('#message').val();
//         var human = $('#human:checked').val();
//
//         if (human) {
//             if (validateEmail(email)) {
//                 if (name) {
//                     if (message) {
//
//                     } else {
//                         $('#notification-text').html("<strong>Por favor, háganos saber lo que está pensando!</strong>");
//                         $('.notification').addClass('is-visible');
//                     }
//                 } else {
//                     $('#notification-text').html('<strong>Por favor proporcione un nombre</strong>');
//                     $('.notification').addClass('is-visible');
//                 }
//             } else {
//                 $('#notification-text').html('<strong>Por favor utilice una dirección de correo electrónico válida.</strong>');
//                 $('.notification').addClass('is-visible');
//             }
//         } else {
//             $('#notification-text').html('<h3><strong><em> Advertencia: Por favor, demuestre que es un humano y no un robot  </em></strong></h3>');
//             $('.notification').addClass('is-visible');
//         }
//
//         return false;
//     });
// });