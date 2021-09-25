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
db.delete(`level_${message.guild.id}`)

return message.inlineReply('<:tik:804253394326913085> Level sistemi açıldı!')

};

if(args[0] == "kapat") {



db.set(`level_${message.guild.id}`, '0')

return message.inlineReply('<:tik:804253394326913085> Level sistemi kapatıldı!')

}; 



};

exports.conf = {

aliases: [] 

}

exports.help = {

  name: "level"

};