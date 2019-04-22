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

var myform = $("form#myform");
var cerrarForm = $('#modal-wrapper');
myform.submit(function(event){
    event.preventDefault();

    var params = myform.serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});

    // Change to your service ID, or keep using the default service
    var service_id = "default_service";

    var template_id = "template_2WohEOBK";
    myform.find("button").text("Enviando..");
    emailjs.send(service_id, template_id, params)
        .then(function(){
            myform.find("button").text("Enviando..");
            document.getElementById("nombre").value = "";
            document.getElementById("correo").value = "";
            document.getElementById("telefono").value = "";
            document.getElementById("mensaje").value = "";
            alert("Se envio Tu Mensaje.. Gracias");
            myform.find("button").text("Enviando");
            $('input[type="text"]').val('');
            $('input[type="email"]').val('');
            $('input[type="tel"]').val('');
            myform.find("button").text("Enviado");
            // document.getElementById("").valueOf() =

            // $("button").click(function(){
            //     $("form#myform")[0].reset();
            // });
            // cerrarForm.remove();
        }, function(err) {
            //alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            myform.find("button").text("Enviando..");
            cerrarForm.close();
        });

    return false;
});
function cerrar() {
    // cerrarForm.remove();
}


//
// (function () {
//     emailjs.init("user_p7Lb20gXPbFdHAmEGDXlp");
// })();
// const vue = new Vue({
//     el: '#app',
//     data() {
//         return {
//             from_name: '',
//             from_email: '',
//             message: '',
//             phone: '',
//         }
//     },
//     methods: {
//         enviar() {
//             let data = {
//                 from_name: this.from_name,
//                 from_email: this.from_email,
//                 message: this.message,
//                 phone: this.phone,
//             };
//
//
//             //validar campos del formulario
//             var txtNombre = document.getElementById('nombre').value;
//             var txtCorreo = document.getElementById('correo').value;
//             var txttelefono = document.getElementById('telefono').value;
//             var banderaRBTN = false;
//
//             //Test campo obligatorio
//             if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
//                 alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
//                 return false;
//             }
//             //Test edad
//             if(txttelefono == null || txttelefono.length == 0 || isNaN(txttelefono)){
//                 alert('ERROR: Debe ingresar un Telefono');
//                 return false;
//             }
//
//
//             //Test correo
//             if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
//                 alert('ERROR: Debe escribir un correo válido');
//                 return false;
//             }
//
//
//             if(txtNombre != null && txtCorreo != null && txttelefono != null){
//                 emailjs.send("gmail", "template_2WohEOBK", data)
//                     .then(function (response) {
//                         if (response.text === 'OK') {
//                             alert('El correo se ha enviado de forma exitosa');
//                             //$("body").html('<div alignt="center"><h1>Enviado Exitosamente!!!</h1></div>'); //Marca nuevo contenido con un mensaje que se envio exitosamente
//                             document.getElementById('contactForm').close;
//                             //contactForm
//                             setTimeout(function(){
//                                 window.close();
//                             },1000); //Dejara un tiempo de 3 seg para que el usuario vea que se envio el formulario correctamente
//
//
//
//                         }
//                         console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
//                     }, function (err) {
//                         alert('Ocurrió un problema al enviar el correo');
//                         console.log("FAILED. error=", err);
//                     });
//             }else{
//                 alert('Por favor verifique los campos del formulario');
//             }
//
//         }
//     }
// });
//
