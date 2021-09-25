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

if(!engin) return message.inlineReply('<:carpi:855750448711467058> Lütfen yapay zeka kanalını belirt!')

db.set(`yapayzekakanal_${message.guild.id}`, engin.id)

db.set(`yapayzeka_${message.guild.id}`, 'aktif')

return message.inlineReply('<:tik:804253394326913085> Yapay zeka sistemi açıldı!')

};

if(args[0] == "kapat") {

let engin = db.fetch(`yapayzeka_${message.guild.id}`)

if(!engin) return message.channel.send('<:carpi:855750448711467058> Yapay zeka sistemi aktif değil!')

db.delete(`yapayzekakanal_${message.guild.id}`)

db.delete(`yapayzeka_${message.guild.id}`)

return message.inlineReply('<:tik:804253394326913085> Yapay zeka sistemi kapatıldı!')

}; 



};

exports.conf = {

aliases: [] 

}

exports.help = {

  name: "yapay-zeka"

};