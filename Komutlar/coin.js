const Discord = require("discord.js")

const db = require("croxydb") 

exports.run = async (client, message, args) => {

let coin = db.fetch(`coin_${message.author.id}`) 

const embed = new Discord.MessageEmbed() 

.setDescription(`<:coin:856798514540445706> Toplam Coinin: ${coin || "0"} 
<:pusula:856408214315597834> Coin hakkında daha fazla bilgi almak için [Destek sunucumuzu](https://discord.gg/KZfAEjrPUF) ziyaret etmeyi unutma!

`) 

.setColor("GOLD")

message.channel.send(embed) 

} 

exports.conf = {

aliases: [] 

}

exports.help = {

name: "coin" 

} 