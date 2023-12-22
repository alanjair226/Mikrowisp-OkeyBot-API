function getConfirmacionPagoDiaAleatorio() {
    const mensajesConfirmacionPagoDia = [
        "¡Gracias por tu pago! Se ha registrado con éxito. ¡Que pases un excelente día!",
        "¡Pago confirmado! Tu pago ha sido procesado. ¡Que tengas un día fantástico!",
        "¡Excelente! Hemos recibido la confirmación de tu pago. ¡Que tengas un maravilloso día!",
        "¡Pago exitoso! Tu pago ha sido confirmado. ¡Que tengas un día increíble!",
        "¡Tu pago ha sido confirmado! ¿En qué más puedo asistirte hoy? ¡Que tengas un día genial!",
        "¡Confirmado! Gracias por tu pago. ¡Que tengas un día fantástico!",
        "¡Gracias por tu pago! Se ha registrado con éxito. ¡Que tengas un maravilloso día!",
        "¡Pago confirmado! Tu pago ha sido procesado. ¡Que pases un excelente día!",
        "¡Excelente! Hemos recibido la confirmación de tu pago. ¡Que tengas un día increíble!",
        "¡Pago exitoso! Tu pago ha sido confirmado. ¡Que tengas un día fantástico!",
        "Gracias por tu pago, se ha registrado con éxito, que pase un buen día",
        "Agradecemos tu pago, se realizo exitosamente, que pase un buen dia.",
    ];

    const randomIndex = Math.floor(
        Math.random() * mensajesConfirmacionPagoDia.length
    );
    return mensajesConfirmacionPagoDia[randomIndex];
}

function getConfirmacionPagoTardeAleatorio() {
    const mensajesConfirmacionPagoTarde = [
        "Gracias por tu pago, se ha registrado correctamente. ¡Que tengas una buena tarde!",
        "¡Pago confirmado! Tu pago ha sido procesado con éxito. ¡Que disfrutes de una tarde agradable!",
        "¡Excelente! Hemos recibido la confirmación de tu pago. ¡Que pases una tarde estupenda!",
        "¡Pago exitoso! Tu pago ha sido confirmado. ¡Que tengas una tarde maravillosa!",
        "¡Tu pago ha sido confirmado, que disfrutes al máximo esta tarde!",
        "¡Confirmado! Gracias por tu pago. ¡Que tengas una tarde fantástica!",
        "Gracias por tu pago, se ha registrado con éxito. ¡Que tengas una tarde increíble!",
        "¡Pago confirmado! Tu pago ha sido procesado con éxito. ¡Que tengas una tarde genial!",
        "¡Excelente! Hemos recibido la confirmación de tu pago. ¡Que pases una tarde maravillosa!",
        "¡Pago exitoso! Tu pago ha sido confirmado. ¡Que tengas una tarde llena de éxitos!",
        "Gracias por tu pago, se ha registrado con éxito, que pase una buena tarde",
    ];
    const randomIndex = Math.floor(
        Math.random() * mensajesConfirmacionPagoTarde.length
    );
    return mensajesConfirmacionPagoTarde[randomIndex];
}

function getConfirmacionPagoNocheAleatorio() {
    const mensajesConfirmacionPagoNoche = [
        "Gracias por tu pago, se ha registrado con éxito. ¡Esperamos que disfrutes de tu noche!",
        "Pago confirmado. Tu pago ha sido procesado correctamente. ¡Que pases una buena noche!",
        "Hemos recibido la confirmación de tu pago. ¡OnFiber te desea una noche agradable!",
        "Tu pago ha sido confirmado. ¡Que tengas una linda noche!",
        "Confirmado. Gracias por tu pago. ¡Te deseamos una noche llena de bienestar!",
        "Pago registrado con éxito. ¡Esperamos que tengas una noche estupenda!",
        "Gracias por tu confianza. Tu pago ha sido confirmado. ¡Te deseamos una excelente noche!",
        "Pago confirmado. Tu pago ha sido procesado correctamente. ¡Que pases una noche agradable!",
        "Hemos recibido la confirmación de tu pago. ¡Que tengas una perfecta noche!",
        "Tu pago ha sido confirmado. ¡Que tengas una linda noche!",
        "Gracias por tu pago, se ha registrado con éxito, que pase una buena noche",
    ];
    const randomIndex = Math.floor(
        Math.random() * mensajesConfirmacionPagoNoche.length
    );
    return mensajesConfirmacionPagoNoche[randomIndex];
}

module.exports = {
    getConfirmacionPagoDiaAleatorio,
    getConfirmacionPagoTardeAleatorio,
    getConfirmacionPagoNocheAleatorio,
};