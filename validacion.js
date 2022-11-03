
const datoNombre = document.querySelector('[data-form-nombre]');
const ingresoEmail = document.querySelector('[data-form-email]');
const ingresoAsunto = document.querySelector('[data-form-asunto]');
const ingresoMensaje = document.querySelector('[data-form-mensaje]');


datoNombre.addEventListener('blur', (evento) => {
    validandoNombre(evento.target);
})

// validando nombre
function validandoNombre(input) {
    nombre = datoNombre.value;
    textoAreaDividido = nombre.split("");
    numeroCaracteres = textoAreaDividido.length;
    let mensaje = "";

    if (numeroCaracteres > 50) {
        mensaje = "error NOMBRE no cumple con lo requerido";

    } else {
        console.log(nombre);
    }
    input.setCustomValidity(mensaje);

}
// validando email:
ingresoEmail.addEventListener('blur', (evento) => {
    validandoEmail(evento.target);
})

function validandoEmail(input) {
    datosEmail = ingresoEmail.value;
    datosTipo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    mensajeEmail = "";

    if (!(datosTipo.test(datosEmail))) {
        mensajeEmail= "el correo es invalido";

    } else {
        console.log(datosEmail);
    }
    input.setCustomValidity(mensajeEmail);
    // return false;
}

// validando asunto:
ingresoAsunto.addEventListener('blur', (evento) => {
    validandoAsunto(evento.target);
})

function validandoAsunto(input) {
    asunto = ingresoAsunto.value;
    asuntoAreaDividido = asunto.split(" ");
    asuntoCaracteres = asuntoAreaDividido.length;

    let mensajeAsunto = "";

    if (asuntoCaracteres > 50) {
        mensajeAsunto = "error, ASUNTO no cumple con lo requerido";
    } else {
        console.log(asunto);
    }

    input.setCustomValidity(mensajeAsunto);

}
// validando mensaje

ingresoMensaje.addEventListener('blur', (evento) => {
    validandoTextArea(evento.target);
})

function validandoTextArea(textarea) {
    mensaje = ingresoMensaje.value;
    mensajeAreaDividido = mensaje.split("");
    mensajeCaracteres = mensajeAreaDividido.length;

    let mensajeText = "";
    if (mensajeCaracteres > 300) {

        mensajeText = "error, MENSAJE no cumple con lo requerido";

    } else {
        console.log(mensaje);
    }
    textarea.setCustomValidity(mensajeText);
}


