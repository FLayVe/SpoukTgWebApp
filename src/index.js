const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '6419070785:AAHaIp5r0-T5xsjdghyuq-6i2WB0J6Q3bOY'

const bot = new TelegramBot(TOKEN, {
    polling: true
})

bot.on('message', async (msg) => {

    const chatId = msg.chat.id
    const text = msg.text
    
    console.log(msg)
})