const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { message } = req.body;

    if (message && message.text) {
      const chatId = message.chat.id;
      const token = '8260512269:AAE27gGibMB5R6JnjZXwyeUd1psftqXNph4';
      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      // Este es el mensaje con el botón para abrir tu web
      const payload = {
        chat_id: chatId,
        text: "👋 ¡Bienvenido a Mega Reward Bot! Presiona el botón de abajo para ver videos y ganar puntos.",
        reply_markup: {
          inline_keyboard: [[
            {
              text: "🚀 Abrir App de Recompensas",
              url: "https://mi-primera-app-seven.vercel.app"
            }
          ]]
        }
      };

      try {
        await axios.post(url, payload);
      } catch (error) {
        console.error("Error al contactar a Telegram:", error.response?.data || error.message);
      }
    }
    return res.status(200).send('OK');
  }
  
  res.status(200).send('Servidor del Bot funcionando correctamente.');
};
