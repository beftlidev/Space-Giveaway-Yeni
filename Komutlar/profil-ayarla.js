const Discord = require("discord.js")

const db = require("croxydb") 

exports.run = async (client, message, args) => {

  if(!args[0]) {

    const embed = new Discord.MessageEmbed() 

.setDescription("<:carpi:855750448711467058> Bir argümant girmen lazım! \n`yaş` **|** `açıklama` **|** `durum` **|** `durum-emoji` **|** `banner` **|** `xbox` **|** `youtube` **|** `github` **|** `twitch` ") 

.setColor("RED") 

return message.channel.send(embed) 

} 

if(args[0] == "yaş") {

db.set(`yas_${message.author.id}`, args[1])

return message.inlineReply('<:calisiyor:798582407393312808> Yaşın ayarlandı!')

};

if(args[0] == "açıklama") {

db.set(`aciklama_${message.author.id}`, args.slice(1).join(" "))

return message.inlineReply('<:calisiyor:798582407393312808> Açıklama ayarlandı!')

};

if(args[0] == "durum") {

db.set(`durum_${message.author.id}`, args.slice(1).join(" "))

return message.inlineReply('<:calisiyor:798582407393312808> Durum ayarlandı!')

};

if(args[0] == "durum-emoji") {

db.set(`durume_${message.author.id}`, args[1])

return message.inlineReply('<:calisiyor:798582407393312808> Durum emoji ayarlandı!')

};

if(args[0] == "banner") {

db.set(`banner_${message.author.id}`, args[1])

return message.inlineReply('<:calisiyor:798582407393312808> Banner ayarlandı!')

};

if(args[0] == "xbox") {

db.set(`xbox_${message.author.id}`, args[1])

return message.inlineReply('<:calisiyor:798582407393312808> Xbox ayarlandı!')

};

if(args[0] == "youtube") {

db.set(`youtube_${message.author.id}`, args[1])

return message.inlineReply('<:calisiyor:798582407393312808> YouTube ayarlandı!')

};

if(args[0] == "github") {

db.set(`github_${message.author.id}`, args[1])

return message.inlineReply('<:calisiyor:798582407393312808> Github ayarlandı!')

};

if(args[0] == "twitch") {

db.set(`twitch_${message.author.id}`, args[1])

return message.inlineReply('<:calisiyor:798582407393312808> Twitch ayarlandı!')

};

} 

exports.conf = {

aliases: [] 

}

exports.help = {

name: "profil-ayarla" 

} 