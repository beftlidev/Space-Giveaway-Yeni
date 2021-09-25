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

  let arg = args[0] 

const embed2 = new Discord.MessageEmbed() 

.setDescription(`<:carpi:855750448711467058> Bir argümant belirtmelisin! 
aç **|** kanal **|** verilecek-rol **|** alınacak-rol **|** chat`) 

if(!arg) return message.inlineReply(embed2) 

if(args[0] == "aç") {

db.set(`kayıt_${message.guild.id}`, "Açık")

return message.inlineReply('<:tik:804253394326913085> Kayıt özelliği açıldı!')

};

if(args[0] == "kanal") {

let kayıt = message.mentions.channels.first()

if(!kayıt) return message.inlineReply('<:carpi:855750448711467058> Lütfen kayıt kanalını belirt!')

db.set(`kayıtkanal_${message.guild.id}`, kayıt.id)

return message.inlineReply(`<:tik:804253394326913085> Kayıt kanalı <#${kayıt.id}> olarak ayarlandı!`)
  const embed3 = new Discord.MessageEmbed() 
 .setDescription(`> 👋 Sunucumuza Hoşgeldin!
<:kalem:857937104323215360> Sunucumuza kayıt olmak için \`g.kayıt-ol <isim> <yaş>\` yazabilirsin!
<:muqboost:768793606210191360> İyi eğlenceler. `) 
 
client.channels.cache.get(kayıt).send(embed3)
};

if(args[0] == "verilecek-rol") {

let kayıt = message.mentions.roles.first()

if(!kayıt) return message.inlineReply('<:carpi:855750448711467058> Lütfen kayıt olunca verilecek rolü belirt!')

db.set(`kayıtrol_${message.guild.id}`, kayıt.id)

return message.inlineReply('<:tik:804253394326913085> Kayıt rol ayarlandı!')

};

if(args[0] == "alınacak-rol") {

let kayıt = message.mentions.roles.first()

if(!kayıt) return message.inlineReply('<:carpi:855750448711467058> Lütfen kayıt olunca alınacak rolü belirt!')

db.set(`kayıtsızrol_${message.guild.id}`, kayıt.id)

return message.inlineReply('<:tik:804253394326913085> !')

};

if(args[0] == "chat") {

let kayıt = message.mentions.channels.first()

if(!kayıt) return message.inlineReply('<:carpi:855750448711467058> Lütfen sohbet kanalını belirt!')

db.set(`kayıtchat_${message.guild.id}`, kayıt.id)

return message.inlineReply(`<:tik:804253394326913085> Sohbet kanalı <#${kayıt.id}> olarak ayarlandı!`)

};

};

exports.conf = {

aliases: [] 

}

exports.help = {

  name: "kayıt-ayarla"

};