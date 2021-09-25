const Discord = require('discord.js');

const db = require('croxydb')

exports.run = async (client, message, args) => {


  let user = message.author

  let sebep = args.join(" ")

 let member = message.mentions.members.first()

  let isim = args.slice(1).join(" ")

  if (!sebep) return message.channel.send(`<:carpi:855750448711467058> <@${user.id}> Afk olmak için bir sebep yazmalısın.`)

  

  db.set(`afk_${user.id}`, sebep)
 
   return message.channel.send(`<@${user.id}> Başarıyla afk moduna geçiş yaptın! nSebep: **__${sebep}__**`)


    
  
};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: [],

  permLevel: 0

}

exports.help = {

  name: 'afk',

  description: "AFK olmanızı sağlar.",

  usage: 'afk <sebep>'

} ///Cagin.