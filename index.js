require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = process.env.TOKEN;
const fs = require('fs')
client.login(TOKEN).then();
client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}`);
    client.user.setAvatar('').then();
})

client.on('message', msg => {

})