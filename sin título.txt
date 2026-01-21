const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { message } = req.body;

    if (message && message.text) {
      const chatId = message.chat.id;
      const token = '8260512269:AAE27gGibMB5R6JnjZXwyeUd1psftqXNph4';
      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      const payload = {
        chat_id: chatId,
        text: "ðŸ‘‹ Â¡Hola! Bienvenido a Mega Reward Bot. Presiona el botÃ³n para empezar a ganar puntos:",
        reply_markup: {
          inline_keyboard: [[
            {
              text: "ðŸš€ Abrir App de Recompensas",
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
  res.status(200).send('Servidor del bot activo');
};
