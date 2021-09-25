const Discord = require('discord.js');

const data = require('croxydb')

const db = require("croxydb") 

exports.run = async (client, message, args) => {
     if(!message.member.permissions.has('MANAGE_MESSAGES')) {

    const embed = new Discord.MessageEmbed()

      .setDescription(`<:carpi:855750448711467058> **Ne yazık ki bu komutu kullanmaya yetkin yok.**`)

      .setColor("RED") 

    message.channel.send(embed);

    return;

  }
if(args[0] == "aç") {

let engin = message.mentions.channels.first()

if(!engin) return message.inlineReply('<:carpi:855750448711467058> Lütfen level log kanalını belirt!')

db.set(`levellog_${message.guild.id}`, engin.id)

return message.inlineReply('<:tik:804253394326913085> Level log açıldı!')

};

if(args[0] == "kapat") {

let engin = db.fetch(`levellog_${message.guild.id}`)

if(!engin) return message.channel.send('<:carpi:855750448711467058> Level log aktif değil!')

db.delete(`levellog_${message.guild.id}`)

return message.inlineReply('<:tik:804253394326913085> Level log kapatıldı!')

} 

};

exports.conf = {

aliases: [] 

}

exports.help = {

  name: "level-log"

};