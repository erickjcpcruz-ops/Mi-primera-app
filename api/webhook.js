const axios = require('axios');

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const { message } = req.body;

        if (message && message.text) {
            const chatId = message.chat.id;
            const userText = message.text;
            const apiToken = '8260512269:AAE27gGibMB5R6JnjZXwyeUd1psftqXNph4';

            if (userText === '/start') {
                const welcomeText = "👋 ¡Hola! Bienvenido a Mega Reward Bot.\n\nPresiona el botón de abajo para entrar a la app y empezar a ganar puntos viendo videos:";
                
                try {
                    await axios.post(`https://api.telegram.org/bot${apiToken}/sendMessage`, {
                        chat_id: chatId,
                        text: welcomeText,
                        reply_markup: {
                            inline_keyboard: [[
                                {
                                    text: "🚀 Abrir App de Recompensas",
                                    web_app: { url: "https://mi-primera-app-seven.vercel.app/" }
                                }
                            ]]
                        }
                    });
                } catch (error) {
                    console.error("Error enviando mensaje:", error);
                }
            }
        }
        return res.status(200).send('OK');
    } else {
        return res.status(200).send('Servidor del bot activo. Esperando mensajes de Telegram...');
    }
};
