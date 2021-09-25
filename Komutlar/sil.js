const Discord = require('discord.js');

exports.run = function(client, message, args) {

  

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);

  

if(isNaN(args[0])) {

  var errembed = new Discord.MessageEmbed()

    .setColor("RANDOM")

    .addField(`**Doğru Kullanım:**`, `**g.sil <silinecek mesaj sayısı>**`)

return message.channel.send(errembed);

}

  

if (args[0] < 1) return message.inlineReply("<:bakimda:798582408642560110> **1** adetten az mesaj silemem!")

if (args[0] > 100) return message.inlineReply("<:bakimda:798582408642560110> **100** adetten fazla mesaj silemem!")

  

message.channel.bulkDelete(args[0]).then(deletedMessages => {

if (deletedMessages.size < 1) return message.inlineReply("<:bakimda:798582408642560110> **14** günden önceki mesajları silemem!");

})

message.channel.send(`<:calisiyor:798582407393312808> **${args[0]}** adet mesaj başarıyla silindi!`)

};

exports.conf = {

  enabled: true, 

  guildOnly: false, 

  aliases: ["sil", "mesaj-sil", "mesajları-sil"],

  permLevel: `Mesajları yönet yetkisine sahip olmak gerekir.`

};

exports.help = {

  name: 'sil',

  category: 'moderasyon',

  description: 'Belirtilen miktarda mesaj siler.',

  usage: '.sil <miktar>'

};