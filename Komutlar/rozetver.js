const Discord = require("discord.js")

const db = require("croxydb") 

exports.run = async (client, message, args) => {

if(message.author.id !== "753842258457002036") return message.inlineReply(":no_entry: Bu Komutu Sadece iUgur Kullanabilir.");

if(args[0] == "pre") {

db.set(`pre_${args[1]}`, "⭐")

return message.inlineReply(`<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye premium verdim!`)

};

if(args[0] == "bug") {

db.set(`bug_${args[1]}`, "<:bug1:850624359836286986>")

return message.inlineReply(`<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye bug-hunter verdim!`)

};

if(args[0] == "owner") {

db.set(`owner_${args[1]}`, "<:owner:850625005548470273>")

return message.inlineReply(`<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye owner verdim!`)

};

if(args[0] == "bug2") {

db.set(`bug2_${args[1]}`, "<:bug2:850624336154722354>")

return message.inlineReply(`<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye bug-hunter2 verdim!`)

};

if(args[0] == "destekçi") {

db.set(`destekci_${args[1]}`, "<:premium:850626381938163743>")

return message.inlineReply(`<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye Destekçi verdim!`)

};

if(args[0] == "yetkili") {

db.set(`yetkili_${args[1]}`, "<:destek:850625292758155264>")

return message.inlineReply(`<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye yetkili verdim!`)

};

if(args[0] == "dev") {

db.set(`dev_${args[1]}`, "<:developer:768822320315105322>")

return message.inlineReply(`<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye developer verdim!`)

};

if(args[0] == "gold") {

db.set(`gold_${args[1]}`, "<:gold:850626402893955123>")

return message.inlineReply(`<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye gold verdim!`)

};

if(args[0] == "mod") {

db.set(`mod_${args[1]}`, "<:mod:855750428926935050>")

return message.inlineReply(`<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye mod verdim!`)

};

if(args[0] == "early") {

db.set(`early_${args[1]}`, "<:early:855750547143524364>")

return message.inlineReply(`<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye early verdim!`)

};

if(args[0] == "onaylı") {

db.set(`onayli_${args[1]}`, "<:verified:799571972727504896>")

return message.inlineReply(`<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye onaylı kullanıcı verdim!`)

};

if(args[0] == "hediye") {

db.set(`hediye_${args[1]}`, "<:codesty_gift:844468550491570186>")

return message.inlineReply(`<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye hediyeci verdim!`)

};
  
  if(args[0] == "beta") {

db.set(`beta_${args[1]}`, "<:beta:856408499025477632>")

return message.inlineReply(`<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye beta kullanıcı verdim!`)

};
  
    if(args[0] == "partner") {

db.set(`partner_${args[1]}`, "<:partner:880350833039007765>")

return message.inlineReply(`<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye partner verdim!`)

};

} 

exports.conf = {

aliases: [] 

}

exports.help = {

name: "rozet-ver" 

}  