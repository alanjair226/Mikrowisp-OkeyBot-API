function obtenerBuenosDiasAleatorio() {
    const buenosDias = [
      "¡Buenos días! ¿Cómo puedo ayudarte hoy?",
      "Hola, ¿en qué puedo asistirte esta mañana?",
      "¡Buenos días! ¿Qué puedo hacer por ti hoy?",
      "Hola, ¿cómo estás? ¿En qué puedo ayudarte hoy?",
      "Buenos días, ¿necesitas ayuda con algo en particular hoy?",
      "Hola, bienvenido/a. ¿En qué puedo ayudarte esta mañana?",
      "¡Buen día! ¿Cómo puedo asistirte hoy?",
      "Hola, espero que tengas un excelente día. ¿Qué puedo hacer por ti hoy?",
      "Buenos días, ¿en qué puedo colaborar contigo esta mañana?",
      "¡Hola! ¿Qué puedo hacer para ayudarte hoy?",
      "¡Feliz día! ¿En qué puedo ayudarte hoy?",
      "Buenos días, ¿cómo estás? ¿Necesitas ayuda con algo en particular?",
      "Hola, ¿en qué puedo asistirte hoy?",
      "¡Buenos días! ¿En qué puedo colaborar contigo hoy?",
      "Hola, bienvenido/a. ¿En qué puedo ayudarte esta mañana?",
      "¡Hola! ¿Necesitas ayuda con algo en particular esta mañana?",
      "Buenos días, ¿qué puedo hacer para ayudarte hoy?",
      "¡Feliz inicio de día! ¿En qué puedo asistirte hoy?",
      "Hola, bienvenido/a. ¿Necesitas ayuda con algo en particular?",
      "Buenos días, ¿cómo puedo hacer tu día más agradable hoy?",
      "¡Hola! ¿Qué puedo hacer para ayudarte a empezar el día?",
      "Buenos días, ¿en qué puedo colaborar contigo esta mañana?",
      "Hola, ¿necesitas ayuda con algo en particular hoy? Estoy aquí para ayudarte.",
      "Buenos días, ¿en qué puedo hacer por ti hoy?",
    ];
  
    const randomIndex = Math.floor(Math.random() * buenosDias.length);
    return buenosDias[randomIndex];
  }
  
  function obtenerBuenasTardesAleatorio() {
    const buenasTardes = [
      "¡Buenas tardes! ¿En qué puedo ayudarte hoy?",
      "Hola, ¿cómo estás? ¿En qué puedo asistirte esta tarde?",
      "¡Hola! ¿Qué puedo hacer por ti esta tarde?",
      "Buenas tardes, ¿en qué puedo colaborar contigo hoy?",
      "Hola, bienvenido/a. ¿En qué puedo ayudarte esta tarde?",
      "¡Buen día! ¿Cómo puedo asistirte hoy?",
      "Hola, espero que estés teniendo una buena tarde. ¿Qué puedo hacer por ti hoy?",
      "Buenas tardes, ¿en qué puedo colaborar contigo hoy?",
      "¡Hola! ¿Qué puedo hacer para ayudarte esta tarde?",
      "¡Feliz tarde! ¿En qué puedo ayudarte hoy?",
      "Buenas tardes, ¿cómo estás? ¿Necesitas ayuda con algo en particular?",
      "Hola, ¿en qué puedo asistirte esta tarde?",
      "¡Buenas tardes! ¿En qué puedo colaborar contigo hoy?",
      "Hola, bienvenido/a. ¿En qué puedo ayudarte esta tarde?",
      "Buenas tardes, ¿en qué puedo hacer tu día más fácil hoy?",
      "¡Hola! ¿Necesitas ayuda con algo en particular esta tarde?",
      "Buenas tardes, ¿qué puedo hacer para ayudarte hoy?",
      "Hola, ¿en qué puedo colaborar contigo esta tarde?",
      "¡Feliz tarde! ¿En qué puedo asistirte hoy?",
      "Buenas tardes, ¿cómo estás hoy? ¿Necesitas ayuda con algo en particular?",
      "Hola, ¿en qué puedo hacer tu tarde más productiva hoy?",
      "¡Buenas tardes! ¿En qué puedo hacer tu día más fácil hoy?",
      "Hola, bienvenido/a. ¿Necesitas ayuda con algo en particular?",
      "Buenas tardes, ¿en qué puedo colaborar contigo esta tarde?",
      "Buenas tardes, ¿Qué puedo hacer por ti hoy?",
    ];
  
    const randomIndex = Math.floor(Math.random() * buenasTardes.length);
    return buenasTardes[randomIndex];
  }
  function obtenerBuenasNochesAleatorio() {
    const buenasNoches = [
      "Gracias por contactarnos en esta noche. Con que le podemos ayudar?",
      "Hola, es un placer atenderte en esta noche. ¿En qué puedo ayudarte?",
      "Buenas noches, ¿en qué puedo asistirte hoy?",
      "¡¿Cómo puedo ayudarte en esta noche?",
      "Hola, gracias por contactarnos en esta hora. ¿En qué puedo colaborar contigo?",
      "Buenas noches, es un gusto atenderte. ¿En qué puedo ayudarte?",
      "Estamos disponibles para asistirte en esta noche.",
      "¿Cómo puedo ayudarte en esta noche?",
      "Hola,¿En qué podemos ayudarte esta noche?",
      "Buenas noches, gracias por contactarnos. ¿En qué podemos ayudarte hoy?",
      "Hola, ¿En qué podemos ayudarte esta noche?",
      "Hola, es un placer asistirte. ¿En qué puedo colaborar contigo en esta noche?",
      "Buenas noches, gracias por contactarnos. ¿En qué podemos ayudarte hoy?",
      "Hola, ¿En qué podemos ayudarte esta noche?",
    ];
  
    const randomIndex = Math.floor(Math.random() * buenasNoches.length);
    return buenasNoches[randomIndex];
  }
  module.exports = {
    obtenerBuenasNochesAleatorio,
    obtenerBuenasTardesAleatorio,
    obtenerBuenosDiasAleatorio,
};  