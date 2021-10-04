const Discord = require('discord.js');
const {MessageButton} = require("discord-buttons") 
exports.run = async(client, message, args) => {

let oylama = 
const embed = new Discord.MessageEmbed() 
.setTitle("Oylama Başladı! :tada:")
.setDescription(oylama) 
.setColor("BLURPLE") 
.setTimestamp() 
const evet = new MessageButton() 
.setStyle("green")
.setLabel("Evet") 
.setEmoji("881423053245009990") 
.setID("oylamaevet") 
const hayır = new MessageButton() 
.setStyle("red")
.setLabel("Hayır") 
.setEmoji("881423084651962439") 
.setID("oylamahayır") 
message.channel.send({embed: embed, 
buttons: [evet, hayır]}) 

};
exports.conf = {
aliases: []
};
exports.help = {
name: "pre-oylama"
};
