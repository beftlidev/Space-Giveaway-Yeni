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

  

if(args[0] == "ayarla") {

let engin = args[1]

if(!engin) return message.inlineReply('<:carpi:855750448711467058> Lütfen bir yazı belirt!')

db.set(`rol_al_text_${message.guild.id}`, args.slice(1).join(" "))

return message.inlineReply('<:tik:804253394326913085> Rol al text ayarlandı!')

};

if(args[0] == "kapat") {

let engin = db.fetch(`rol_al_text_${message.guild.id}`)

if(!engin) return message.channel.send('<:carpi:855750448711467058> Text ayarlı değil!')

db.delete(`rol_al_text_${message.guild.id}`)

return message.inlineReply('<:tik:804253394326913085> Rol al text kapatıldı!')

}; 

};

exports.conf = {

aliases: [] 

}

exports.help = {

  name: "buton-rol-text"

};