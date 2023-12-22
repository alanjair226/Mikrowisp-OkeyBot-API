const mensajesPagoConfirmacion = require('./mensajesPagoConfirmacion');
const mensajesSaludo = require('./mensajesSaludo');

function confirmarSegunHora() {
    const options = { timeZone: "America/Mexico_City", hour: "numeric" };
    const hora = new Date().toLocaleString("es-MX", options);
    let saludo;

    if (hora >= 5 && hora < 12) {
        saludo = mensajesPagoConfirmacion.getConfirmacionPagoDiaAleatorio();
    } else if (hora >= 12 && hora < 20) {
        saludo = mensajesConfirmacion.getConfirmacionPagoTardeAleatorio();
    } else {
        saludo = mensajesConfirmacion.getConfirmacionPagoNocheAleatorio();
    }

    return saludo;
}

function saludarSegunHora() {
    const options = { timeZone: "America/Mexico_City", hour: "numeric" };
    const hora = new Date().toLocaleString("es-MX", options);
    let saludo;
  
    if (hora >= 5 && hora < 12) {
      saludo = mensajesSaludo.obtenerBuenosDiasAleatorio();
    } else if (hora >= 12 && hora < 20) {
      saludo = mensajesSaludo.obtenerBuenasTardesAleatorio();
    } else {
      saludo = mensajesSaludo.obtenerBuenasNochesAleatorio();
    }
  
    return saludo;
  }

module.exports = {
    confirmarSegunHora,
    saludarSegunHora
};
