const TelegramBot = require('node-telegram-bot-api');
const { configToken } = require('./configToken')

const bot = new TelegramBot(configToken, {polling: true});

const keyboard = [
    [
        {
            text: 'Боевик',
            callback_data: 'actionFilm'
        }
    ],
    [
        {
          text: 'Детектив',
          callback_data: 'detectiveFilm'
        }
    ],
    [
        {
          text: 'Хоррор',
          callback_data: 'horrorFilm'
        }
    ],
    [
        {
          text: 'Мелодрама',
          callback_data: 'dramaFilm'
        }
    ],
    [
        {
          text: 'Комедия',
          callback_data: 'comedyFilm'
        }
    ],
];

const keyboardBack = [
    [
        {
            text: 'Назад',
            callback_data: 'backHome'
        }
    ],
];


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `Привет, я кинобот!

Выбери жанр фильма, который хочешь посмотреть ⬇️`, {
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    let url = '';

    if (query.data === 'actionFilm') {
        url = 'https://www.kinopoisk.ru/film/427202/';
    }
    if (query.data === 'detectiveFilm') {
        url = 'https://www.kinopoisk.ru/film/1188529/';
    }
    if (query.data === 'horrorFilm') {
        url = 'https://www.kinopoisk.ru/film/495892/';
    }
    if (query.data === 'dramaFilm') {
        url = 'https://www.kinopoisk.ru/film/5492/';
    }
    if (query.data === 'comedyFilm') {
        url = 'https://www.kinopoisk.ru/film/818981/';
    }
    if (url) {
        bot.sendMessage(chatId, url, {
            reply_markup: {
                inline_keyboard: keyboardBack
            } 
        });
    }
    if (query.data === 'backHome') {
        bot.sendMessage(chatId, 'Выбери жанр фильма, который хочешь посмотреть ⬇️', {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    }
});