const Discord = require("discord.js")

exports.run = async (client, message, args) => {
const Captcha = require('discord-button-captcha')

const captcha = new Captcha(client, {

    

    channelID: message.channel.id,

});
} 

exports.conf = {

aliases: [] 

}

exports.help = {

name: "doğrulama" 

} 