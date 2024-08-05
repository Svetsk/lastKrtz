import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const { fio, phone, comment } = body;

    const message = `❗️НОВАЯ ЗАЯВКА \n\n ФИО: ${fio}\nТелефон: ${phone}\nКомментарий: ${comment}`;
    const token = '7454948995:AAEZugQWPtEYkba6X9j5ycubHssmAD7cUBc'; // Замените на токен вашего бота
    const chatId = '6711483014'; // Замените на ваш chat ID или ID группы, куда хотите отправлять сообщения

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const response = await $fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        });

        return response;
    } catch (error) {
        console.error('Ошибка:', error);
        return {
            ok: false,
            description: 'Ошибка отправки сообщения',
        };
    }
});
