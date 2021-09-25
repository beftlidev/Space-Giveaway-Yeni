const Discord = require('discord.js');

const db = require("croxydb");

const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {

     if(!message.member.permissions.has('MANAGE_MESSAGES')) {

    const embed = new Discord.MessageEmbed()

      .setDescription(`**Ne yazık ki bu komutu kullanmaya yetkin yok. <:bakimda:798582408642560110>**`)

    message.channel.send(embed);

    return;

  }
    

  let preffix = db.fetch(`prefix_${message.guild.id}`)

   if(!args[0]) return message.reply(`Bu sunucudaki prefixim: **${preffix ? preffix : ayarlar.prefix}** \nPrefixi Değiştirmek veya Sıfırlamak İçin **( ayarla / sıfırla )**`)

    if(args[0] == "sıfırla" || args[0] =="reset") {

    if(!preffix) {

      return message.inlineReply(`<:bakimda:798582408642560110> Prefix zaten ayarlanmamış.`)

    } else {

    db.delete(`prefix_${message.guild.id}`)

    return  message.inlineReply(`<:calisiyor:798582407393312808> Prefix başarıyla sıfırlandı. Prefix artık **${ayarlar.prefix}**`)

    }

  }

  

  

  if(args[0] === "ayarla" || args[0] == "set") {

      if(!args[1]) return message.inlineReply("<:bakimda:798582408642560110> Bir Prefix Giriniz")

    if(preffix) {

        return message.inlineReply(`<:bakimda:798582408642560110> Prefix zaten ayarlanmış.`)

      } else {

      db.set(`prefix_${message.guild.id}`, args[1])

      message.inlineReply(`<:calisiyor:798582407393312808> Prefix başarıyla **${args[1]}** olarak ayarlandı.\n${args[1]}prefix sıfırla yazarak prefixi sıfırlayabilirsiniz.`)

      }

  }

}                 

exports.conf = {

  enabled: true,

  aliases: ['prefix'],

  permLevel: 3

};

exports.help = {

  name: 'prefix',

  kategori: "yetkili",

  description: 'Sunucuya özel prefix ayarlar.',

  usage: 'prefix'

};