const { configToken } = require('./configToken')

const Telegraf = require('telegraf')

const bot = new Telegraf(configToken)
bot.start((ctx) => ctx.reply('Привет! Я тестовый бот. Напиши команду /help чтобы получить список команд'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()