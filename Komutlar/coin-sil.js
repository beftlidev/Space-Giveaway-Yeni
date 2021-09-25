const Discord = require("discord.js")

const db = require("croxydb") 

exports.run = async (client, message, args) => {

if(message.author.id !== "753842258457002036") if(message.author.id !== "753842258457002036") return message.channel.send("<:carpi:855750448711467058> Bu komut <@753842258457002036>' a özeldir!!")

db.subtract(`coin_${args[0]}`, args[1])

message.inlineReply(`<:tik:804253394326913085> <@${args[0]}> Adlı kişiden ${args[1]} coin sildim!`) 

} 

exports.conf = {

aliases: [] 

}

exports.help = {

name: "coin-sil" 

} 