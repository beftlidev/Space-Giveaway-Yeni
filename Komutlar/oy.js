const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons") 
const db = require("croxydb");

exports.run = async (client, message, args) => {

    const DBL = require('dblapi.js')

    let kullanıcı = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
    let button = new MessageButton() 
   .setStyle("url")
   .setLabel("Oy Linki") 
    .setEmoji("846276938179280936")
   .setURL("https://top.gg/bot/765207268408033322") 
    
    let embed = new Discord.MessageEmbed()
    .setDescription("<:carpi:855750448711467058> 12 Saat içinde Space Giveaway' a Oy vermemiş!")
    .setColor("RED")
    let embed2 = new Discord.MessageEmbed()
    .setDescription("<:verified:799571972727504896> 12 Saat içinde Space Giveaway' a Oy Vermiş!")
    .setColor("GREEN")
    
const dbl = new 

DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2NTIwNzI2ODQwODAzMzMyMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE0MzY5NTkwfQ.WC8doV3KEhoWAInJEI4sOPMAJ-nDzWMfJgp8Tb0jqsI", client) 

dbl.hasVoted(kullanıcı.id).then(async voted => {

  let west;

  if(!voted) message.inlineReply({
    embed: embed,
    buttons: [button]
  }) 
  else message.inlineReply(embed2) 

})

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: "oy-durum",

  usage: "oy-durum"

}; 